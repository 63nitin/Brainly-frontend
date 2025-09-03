
import { useRef } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/ui/Button"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

   async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

      await  axios.post(BACKEND_URL + "/api/v1/signup", {
            
                username,
                password
            
        });
        navigate("/signin");

    }
    return(
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-md border-purple-200 border-2 p-8">
                <Input ref={usernameRef} placeholder="Username" />
                <Input ref={passwordRef} placeholder="Password"/>


                <div className="flex justify-center pt-2">    
                <Button variant="primary" text="Signup" fullWidth = {true} loading={false} Click={signup}/>
                </div>
            
            </div>

        </div>
    )
}