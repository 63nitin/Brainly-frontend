
type Variants = "primary" | "secondary";

 interface ButtonProps {
   variant: Variants;
   size: "sm" | "md" | "lg";
   text: string;
   startIcon?: any;
   endIcon?: any;
   onClick: () => void;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600"

}

const sizeStyles = {
    "sm": "px-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-3 px-8"
}

const defaultStyles = "rounded-md flex";

export const Button = (props: ButtonProps) =>{
  return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
   <div className="flex justify-center text-center items-center">
     {props.startIcon ? <div className="pr-1 pl-2"> {props.startIcon}</div>: null}
    {props.text}
    {props.endIcon ? <div className="pr-1 pl-1"> {props.endIcon}</div>: null}
   </div>
    </button>

}



