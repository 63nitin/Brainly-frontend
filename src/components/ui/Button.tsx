import type { ReactElement } from "react"


interface ButtonProps {
  variant: "primary" | "secondary"
  text: string,
  startIcon?: ReactElement,
  Click?: () => void;
  fullWidth?: boolean;
  loading?: boolean;

  
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center cursor-pointer"

const variantClasses = {
  "primary": "bg-purple-600 text-white",
  "secondary": "bg-purple-300"
}


export function Button(props: ButtonProps){
  return <button onClick={props.Click} className={variantClasses[props.variant] + " " + defaultStyles + `${props.fullWidth ? " w-full flex justify-center items-center ": "  "} ${ props.loading ? "opacity-45": " " }`}>
   <div className="">
      {props.startIcon}
   </div>
   {props.text}
  </button>
}