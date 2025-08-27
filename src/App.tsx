
import { Button } from "./components/ui/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"
export default function App(){
  return(
    <div>
      <h1 className="">Brainly....</h1>
      <Button startIcon={<PlusIcon size="sm"/>} 
      endIcon= {<ShareIcon size="md"/>} 
       variant="secondary" size="sm"
        onClick={() => {}} text={"asdasd"}/>
        
    </div>
  )
}