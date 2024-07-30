import { useCallback } from "react";
interface UsePercentToValueProps {
   min: number;
   max: number;
   rangeValues?: number[];
}

export const usePercentToValue = ({ min, max, rangeValues }: UsePercentToValueProps) => {
   const isFixedRange = Array.isArray(rangeValues) && rangeValues.length > 0;

   return useCallback(
      (percent: number) => {
         if (isFixedRange && rangeValues) {
            const index = Math.round((percent / 100) * (rangeValues.length - 1));
            return rangeValues[index];
         }
         return min + (percent / 100) * (max - min);
      },
      [isFixedRange, rangeValues, min, max]
   );
};
