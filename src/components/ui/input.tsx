import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "./button";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   onIncrement?: () => void;
   onDecrement?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, onIncrement, onDecrement, ...props }, ref) => {
   const isNumberType = type === "number";

   return (
      <div className='relative flex items-center'>
         <input
            type={type}
            className={cn(
               "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",

               className
            )}
            ref={ref}
            {...props}
         />
         {isNumberType && (
            <div className='absolute right-0 h-full flex flex-col w-8'>
               <Button className='border-b-0 rounded-l-none rounded-br-none p-0' variant={"outline"} onClick={onIncrement}>
                  <ChevronUp size={12} />
               </Button>
               <Button className='rounded-l-none rounded-tr-none p-0' variant={"outline"} onClick={onDecrement}>
                  <ChevronDown size={12} />
               </Button>
            </div>
         )}
      </div>
   );
});

Input.displayName = "Input";

export { Input };
