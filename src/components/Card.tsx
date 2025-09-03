import { ShareIcon } from "../icons/ShareIcon";

interface CardProps{
    title: string,
    link: string,
    type: "youtube" | "twitter"


}
export function Card({title, link, type}: CardProps){
    return(
        <>
        <div className="bg-white p-4 rounded-md   border-gray-300
         shadow-md max-w-72">
         <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <div className="text-gray-500">
                    <ShareIcon size="md"/>
                </div>
                {title}
            </div>
            <div className="flex items-center">
                <div className="pr-2 text-gray-500">
                    <a href= {link} target="_blank"> <ShareIcon size="md"/></a>
                  
                </div>
                <div className="text-gray-500">
                    🪣
                </div>
                
            </div>
         </div>
         <div className="pt-4">
            {type === "youtube" && <iframe className="w-full rounded-md" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
         

         {type === "twitter" && <blockquote className="">
            <a href="https://x.com/Dr_Biohacker/status/1961079034697404920https://x.com/Amockx2022/status/1961091817820377232"></a>
          </blockquote> }
          
          </div>
        </div>
        </>
    )
}