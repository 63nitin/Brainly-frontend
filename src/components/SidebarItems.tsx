import type { ReactElement } from "react";


export function SidebarItems({text, icon}: {
    text: String;
    icon: ReactElement
})  {
   return <div className="flex items-center hover:bg-gray-300 rounded-md max-w-48 transition-all duration-150 cursor-pointer ">
    <div className="p-2">
        {icon}
    </div>
    <div className="p-2">
            {text}
    </div>
   
   </div>
}