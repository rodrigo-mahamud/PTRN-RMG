import Range from "./ui/range";
import { getRangeData } from "@/lib/getData";

export default async function RangeWrapper({ isFixed }) {
   const data = await getRangeData(isFixed);
   return (
      <Range
         min={data.min}
         max={data.max}
         rangeValues={isFixed ? data.range : undefined}
         defaultValue={isFixed ? data.default : undefined}
         clickOnLabel
         isFixedRange={isFixed}
         minDistance={5}
         selectedColor='#3d5ef8'
         unselectedColor='#dae3f4'
      />
   );
}
