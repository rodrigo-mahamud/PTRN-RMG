import { forwardRef } from "react";
import { BarProps } from "../../types";

const Bar = forwardRef<HTMLDivElement, BarProps>(({ selectedRange, selectedColor, unselectedColor, className, ...rest }, ref) => {
   return (
      <div {...rest} className={`bar ${className || ""}`.trim()} ref={ref} style={{ background: `${selectedColor}` }}>
         <div
            className='unselected-range-left'
            style={{
               position: "absolute",
               left: "0",
               width: `${selectedRange.start}%`,
               height: "100%",
               backgroundColor: unselectedColor,
            }}
         />
         <div
            className='unselected-range-right'
            style={{
               position: "absolute",
               left: `${selectedRange.end}%`,
               right: "0",
               height: "100%",
               backgroundColor: unselectedColor,
            }}
         />
      </div>
   );
});

export default Bar;
