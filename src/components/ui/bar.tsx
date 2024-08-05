import { forwardRef } from "react";
import { BarProps } from "@/types";

const Bar = forwardRef<HTMLDivElement, BarProps>(({ selectedRange, selectedColor, className, ...rest }, ref) => {
   return (
      <div
         {...rest}
         className='w-full h-12 md:h-6 border-y border-border overflow-hidden relative transition-custom group-hover:h-12 duration-300 delay-75 group-hover:opacity-75 opacity-100 dark:group-hover:opacity-100  dark:opacity-75'
         ref={ref}
         style={{ background: selectedColor }}>
         <div
            className='unselected-range-left absolute left-0 h-full bg-white/80 dark:bg-black/80'
            style={{
               width: `${selectedRange.start}%`,
               height: "100%",
            }}
         />
         <div
            className='unselected-range-right absolute right-0 h-full bg-white/80 dark:bg-black/80'
            style={{
               left: `${selectedRange.end}%`,
               height: "100%",
            }}
         />
      </div>
   );
});

Bar.displayName = "Bar";

export default Bar;
