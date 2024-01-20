import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa6";
import * as Icon from "react-feather";

const NavBar = () => {
    return(
        <div className="top-0 left-0 right-0 w-full flex flex-row items-center justify-between px-4 pt-4 z-50">
            <div className="flex flex-row items-center justify-center w-max h-max gap-3">
                <Link to={'/tiktok'} target="_blank">
                    <IconContext.Provider value={{ color: "white", size: "25" }}>
                        <FaTiktok />
                    </IconContext.Provider>
                </Link>
                <Link to={'/discord'} target="_blank">
                    <IconContext.Provider value={{ color: "white", size: "30" }}>
                        <FaDiscord />
                    </IconContext.Provider>
                </Link>
                <Link to={'/instagram'} target="_blank">
                    <IconContext.Provider value={{ color: "white", size: "30" }}>
                        <FaInstagram />
                    </IconContext.Provider>
                </Link>
            </div>
            <div className="flex flex-row items-center justify-center w-max h-max gap-3">
                <Link to={'/auth/login'} className="rounded-full">
                    <div className="flex flex-row items-center justify-center py-[7px] px-4 rounded-full bg-refilc text-white">
                        <p className="text-[14px]">Bejelentkezés</p>
                    </div>
                </Link>
                <Link to={'#download'} className="rounded-full">
                    <div className="flex flex-row items-center justify-center p-[7px] rounded-full bg-refilc text-white">
                        <Icon.Download size={21} />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;