import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const PrivacyPolicy = () => {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex flex-col items-center justify-center px-10 pb-16 w-full">
                <h1 className='font-bold text-[45px] mt-16'>Privacy Policy</h1>
                <p className='text-[20px] opacity-70'>Last modified on 13.02.2024.</p>
                <div className='flex flex-col gap-4 max-w-[900px] mt-10 text-justify indent-2'>
                    <p>• reFilc (the app) is a mobile, desktop and web client application that allows you to download and display your data in a user-friendly way from the e-KRÉTA system. Your academic data is only transferred directly between the application and the e-KRÉTA servers via an encrypted connection.</p>
                    <p>
                        • Your academic and personal data will not be copied, stored or transmitted to third parties by the developers and/or operators of reFilc and the application for any purpose or under any circumstances. They are thus processed by Educational Development Informatikai Zrt., their information on data processing can be found here:  
                        <span className='mx-2 underline'>
                            <Link to={'https://tudasbazis.ekreta.hu/pages/viewpage.action?pageId=4065038'}>tudasbazis.ekreta.hu</Link>
                        </span>
                    </p>
                    <p>• To delete or change them, contact your class teacher or your school administrator.</p>
                    <p>• The application collects anonymous usage statistics, which allow us to determine the number of users and installations, as well as the platform of their device. You can turn this off in the settings. Please leave this feature turned on if you can, so that we have more accurate information about the platform distribution of our users.</p>
                    <p>• When the application encounters an error, it is possible to send an error report. This does not contain any personal and/or academic data, but gives detailed information about the error, its cause and your device. It is your responsibility to review the data sequence to be transmitted on the screen before sending. Error reports are stored in the reFilc developer interface and in a private Discord room, accessible only by app developers.</p>
                    <p>• Each time the app (on Android, Linux, Windows) is launched, it checks for a new version using the reFilc API and the Github API, and downloads and installs the update on request.</p>
                    <p>
                        • If you have any questions about your data (access, deletion, modification, storage), please contact us at 
                        <span className='mx-2 underline'>
                            <Link to={'mailto:social@refilc.hu'}>
                                social@refilc.hu 
                            </Link>
                        </span>
                        e-mail address, or on our 
                        <span className='mx-2 underline'>
                            <Link to={'/go/s/discord'}>
                                Discord 
                            </Link>
                        </span>
                        server!
                    </p>
                    <p>• By using the Client Application on any device or platform, you acknowledge and agree to this Privacy Policy. The reFilc team reserves the right to modify this notice and is not obliged to notify its users of any changes!</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicyEN;