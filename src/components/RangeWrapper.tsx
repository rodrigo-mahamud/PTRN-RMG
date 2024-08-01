import React, { useMemo } from "react";
import Range from "./ui/range";
import { getDataWithSuspense } from "../lib/getData";
import { RangeWrapperProps, RangeData } from "../types";

const RangeWrapper: React.FC<RangeWrapperProps> = React.memo(({ isFixed }) => {
   const data: RangeData = useMemo(() => getDataWithSuspense(isFixed), [isFixed]);

   const { min, max } = useMemo(() => {
      if (isFixed && data.range && data.range.length > 0) {
         return {
            min: data.range[0],
            max: data.range[data.range.length - 1],
         };
      }
      return { min: data.min, max: data.max };
   }, [isFixed, data]);

   return (
      <Range
         min={min}
         max={max}
         rangeValues={isFixed ? data.range : undefined}
         defaultValue={isFixed ? data.default : undefined}
         clickOnLabel
         isFixedRange={isFixed}
         minDistance={5}
         selectedColor='#3d5ef8'
         unselectedColor='#dae3f4'
      />
   );
});

export default RangeWrapper;
