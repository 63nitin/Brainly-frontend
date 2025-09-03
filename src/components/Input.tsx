import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className="p-3 bg-purple-200 rounded border-none m-2"
        />
      </div>
    );
  }
);

