import { useCallback } from "react";

interface UseValueToPercentProps {
   min: number;
   max: number;
   rangeValues?: number[];
}

export const useValueToPercent = ({ min, max, rangeValues }: UseValueToPercentProps) => {
   const isFixedRange = Array.isArray(rangeValues) && rangeValues.length > 0;

   return useCallback(
      (value: number) => {
         if (isFixedRange && rangeValues) {
            const index = rangeValues.indexOf(value);
            return (index / (rangeValues.length - 1)) * 100;
         }
         return ((value - min) / (max - min)) * 100;
      },
      [isFixedRange, rangeValues, min, max]
   );
};
