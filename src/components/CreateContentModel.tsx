import axios from "axios";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./ui/Button";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import { Input } from "./Input";


enum ContentType{
  Youtube = "youtube",
  Twitter = "twitter"
}

export function CreateContentModel({open, onClose}){
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube)

async  function addContent(){
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
       link,
       title,
       type
    }, {
      headers:{
        "Authorization" : localStorage.getItem("token")
      }
    } )
 console.log(link);
 console.log(title);
  }
   
  
    return(
        <div>
            {open && <div className="w-screen h-screen bg-slate-900 opacity-80 fixed top-0 left-0 flex justify-center">
              <div className="flex items-center justify-center">
                  <span className="bg-white p-4 rounded-md">
                  <div className="flex justify-end">
                    <div onClick={onClose}>
                    <CrossIcon size="md"/>
                    </div>
                  </div>
                  <div>

                    <Input ref={titleRef} placeholder="title"/>
                    <Input ref={linkRef} placeholder="link" />
                    
                        <h1>Type</h1>

                      <div className="flex gap-1 p-4">
                             <Button text="Youtube" variant={type === ContentType.Youtube ? "primary": "secondary"} Click = { ()=> {
                      setType(ContentType.Youtube)
                    }}/>
                      <Button text="Twitter" variant={type === ContentType.Twitter ? "primary": "secondary"} Click={()=> {
                        setType(ContentType.Twitter)
                      }}/>
                      </div>


                  </div>
                  <div className="flex justify-center" onClick={addContent}>
                  <Button variant="primary" text="Submit"  />
                  </div>
                </span>
              </div>

    </div>} 
        </div>
    )
   
}

