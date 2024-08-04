import Range from "./ui/range";
import { getRangeData } from "@/lib/getData";

import { RangeProps } from "@/types";

export default async function RangeWrapper({ isFixed }: RangeProps) {
   const data = await getRangeData(isFixed);
   return (
      <Range
         min={data.min}
         max={data.max}
         rangeValues={isFixed ? data.range : undefined}
         defaultValue={isFixed ? data.default : undefined}
         clickOnLabel
         isFixed={isFixed}
         minDistance={5}
         selectedColor='#6d28d9'
         unselectedColor='#dae3f4'
      />
   );
}
