
import { Button } from "./components/ui/Button"
import { PlusIcon } from "./icons/PlusIcon"
export default function App(){
  return(
    <div>
      <h1 className="">Brainly....</h1>
      <Button startIcon={<PlusIcon size="sm"/>} variant="secondary" size="sm" onClick={() => {}} text={"asdasd"}/>
        <Button startIcon={<PlusIcon size ="md" />}  variant="primary" size="md"  onClick={() => {}} text={"share"} />
           <Button startIcon={<PlusIcon size="lg" />}  variant="primary" size="lg"  onClick={() => {}} text={"ADD"} />
    </div>
  )
}