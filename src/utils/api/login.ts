import { KretaAPI } from "../webkreten/api";
import { UserDB } from "../db/users";
import { KretaClient } from "../webkreten/client";
import { Config } from "../../models/config";
import { Nonce, getNonce } from "../webkreten/nonce";
import { LoginUser } from "../../models/user";
import { Settings } from "../settings";
import { JwtUtils } from "../jwt";
import { v4 } from "uuid";

export async function loginAPI(username: string, password: string, instituteCode: string, onLogin?: Function, onSuccess?: Function) {
    const config: Config = Config.fromJson(JSON.parse(window.localStorage.getItem('config')!));

    const kretaClient = new KretaClient();
    kretaClient.userAgent = config.userAgent();

    const headers = new Map<string, string>([
        ['content-type', 'application/x-www-form-urlencoded'],
    ]);

    const nonceString: string = await kretaClient.getAPI(KretaAPI.nonce, {}, { json: false });
    const nonce: Nonce = getNonce(nonceString, username, instituteCode);

    const nonceHeaders: Map<string, string> = nonce.header()
    nonceHeaders.forEach((value, key) => {
        headers.set(key, value);
    });

    // const loginBody: Record<any, any> = {
    //     'userName': username,
    //     'password': password,
    //     'institute_code': instituteCode,
    //     'grant_type': 'password',
    //     'client_id': KretaAPI.clientId,
    // };
    const loginBody: string = `userName=${username}&password=${password}&institute_code=${instituteCode}&client_id=${KretaAPI.clientId}&grant_type=password`;

    const res = await kretaClient.postAPI(KretaAPI.login, loginBody, Object.fromEntries(headers), {});

    if (res != null) {
        if (res["error"]) {
            if (res["error"] == "invalid_grant") {
                return LoginState.invalidGrant;
            }
        } else {
            if (res["access_token"]) {
                try {
                    kretaClient.accessToken = res["access_token"];
                    const studentJson = await kretaClient.getAPI(KretaAPI.student(instituteCode), {}, {});

                    const userID = v4();
                    const user = new LoginUser(userID, username, password, instituteCode, studentJson['name'], 'will-be', JwtUtils.getRoleFromJWT(res["access_token"])!, '', '');
            
                    if (onLogin != null) await onLogin(user);
            
                    // Store User in the database
                    UserDB.addUser(user);
                    Settings.set('currentUser', userID);

                    // Get user data
                    try {
                        // fetch everythin cute from api, i'll do that later
                        // await Future.wait([
                        //     Provider.of<GradeProvider>(context, listen: false).fetch(),
                        //     Provider.of<TimetableProvider>(context, listen: false).fetch(week: Week.current()),
                        //     Provider.of<ExamProvider>(context, listen: false).fetch(),
                        //     Provider.of<HomeworkProvider>(context, listen: false).fetch(),
                        //     Provider.of<MessageProvider>(context, listen: false).fetchAll(),
                        //     Provider.of<NoteProvider>(context, listen: false).fetch(),
                        //     Provider.of<EventProvider>(context, listen: false).fetch(),
                        //     Provider.of<AbsenceProvider>(context, listen: false).fetch(),
                        // ]);
                    } catch (error) {
                        console.warn(`[reFilc-API]: Failed to fetch user data: ${error}`);
                    }
            
                    if (onSuccess != null) await onSuccess();
            
                    return LoginState.success;
                } catch (error) {
                    console.error(`[reFilc-Auth]: loginApi: ${error}`);
                    // maybe check debug mode
                    // ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("ERROR: $error")));
                    return LoginState.failed;
                }
            }
        }
    }
}

enum LoginState {
    missingFields,
    invalidGrant,
    failed,
    normal,
    inProgress,
    success,
}