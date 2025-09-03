import { LogoIcon } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItems";



export function Sidebar(){
    return(
        <div className="h-screen bg-white fixed border-r w-72  left-0 top-0 pl-4">
            <div className="flex text-2xl text-gray-700 pt-4 items-center"><span className="p-2 text-2xl"><LogoIcon size="lg"/></span><span className="text-gray-800 font-semibold">Brainly</span>
            </div>
            <div className="pt-4 pl-4">
                <SidebarItems text="Twitter" icon={<TwitterIcon size="lg" />}/>

                <SidebarItems text="YouTube" icon={<YoutubeIcon size="lg" />}/>

            </div>
        </div>
    )
}