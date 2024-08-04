"use client";
import React, { useState, useRef, useCallback, useMemo, useEffect } from "react";
import Tracks from "./tracks";
import Dot from "./dot";
import Bar from "./bar";
import Label from "./label";
import { RangeProps, DotRef, SelectedRange } from "@/types";
import { useValueToPercent } from "@/hooks/useValueToPercent";
import { usePercentToValue } from "@/hooks/usePercentToValue";
import { Input } from "./input";

interface ControlledRangeProps extends RangeProps {
   value?: SelectedRange;
   onRangeChange?: (range: SelectedRange) => void;
}

const Range: React.FC<ControlledRangeProps> = React.memo(
   ({
      min = 0,
      max = 100,
      defaultValue,
      value,
      rangeValues,
      clickOnLabel,
      isFixed,
      minDistance = 0,
      selectedColor = "#3b82f6",
      unselectedColor = "#dae3f4",
      onChange,
      onRangeChange,
      ...rest
   }) => {
      const [internalSelectedRange, setInternalSelectedRange] = useState<SelectedRange>(() => ({
         start: defaultValue?.min ?? min,
         end: defaultValue?.max ?? max,
      }));

      const selectedRange = value || internalSelectedRange;

      const dot1Ref = useRef<DotRef>(null);
      const dot2Ref = useRef<DotRef>(null);

      const valueToPercent = useValueToPercent({ min, max, rangeValues });
      const percentToValue = usePercentToValue({ min, max, rangeValues });

      const getNearestFixedValue = useCallback(
         (percent: number) => {
            if (!isFixed) return percent;
            const value = percentToValue(percent);
            const nearestValue = rangeValues!.reduce((prev, curr) => (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev));
            return valueToPercent(nearestValue);
         },
         [isFixed, rangeValues, percentToValue, valueToPercent]
      );

      const updateRange = useCallback(
         (start: number, end: number) => {
            const newStart = percentToValue(start);
            const newEnd = percentToValue(end);
            const newRange = { start, end };

            if (!value) {
               setInternalSelectedRange(newRange);
            }

            onRangeChange?.(newRange);
            onChange?.(newStart, newEnd);
         },
         [percentToValue, onChange, onRangeChange, value]
      );

      const handleDotChange = useCallback(
         (dotIndex: 1 | 2) => (newValue: number) => {
            const otherDotValue = dotIndex === 1 ? selectedRange.end : selectedRange.start;
            const minDistancePercent = valueToPercent(minDistance);

            let newStart, newEnd;
            if (dotIndex === 1) {
               newStart = Math.min(newValue, 100 - minDistancePercent);
               newEnd = Math.max(newStart + minDistancePercent, otherDotValue);
            } else {
               newEnd = Math.max(newValue, minDistancePercent);
               newStart = Math.min(newEnd - minDistancePercent, otherDotValue);
            }

            updateRange(newStart, newEnd);
            dot1Ref.current?.update(newStart);
            dot2Ref.current?.update(newEnd);
         },
         [selectedRange, minDistance, updateRange, valueToPercent]
      );

      const handleDotRelease = useCallback(
         (dotIndex: 1 | 2) => (value: number) => {
            const nearestValue = getNearestFixedValue(value);
            handleDotChange(dotIndex)(nearestValue);
         },
         [getNearestFixedValue, handleDotChange]
      );

      const handleInputChange = useCallback(
         (dotIndex: 1 | 2) => (inputValue: number) => {
            const clampedValue = Math.max(min, Math.min(max, inputValue));
            const percent = valueToPercent(clampedValue);
            handleDotChange(dotIndex)(percent);
         },
         [min, max, valueToPercent, handleDotChange]
      );

      const handleIncrement = useCallback(
         (dotIndex: 1 | 2) => () => {
            const currentValue = percentToValue(dotIndex === 1 ? selectedRange.start : selectedRange.end);
            handleInputChange(dotIndex)(currentValue + 1);
         },
         [percentToValue, selectedRange, handleInputChange]
      );

      const handleDecrement = useCallback(
         (dotIndex: 1 | 2) => () => {
            const currentValue = percentToValue(dotIndex === 1 ? selectedRange.start : selectedRange.end);
            handleInputChange(dotIndex)(currentValue - 1);
         },
         [percentToValue, selectedRange, handleInputChange]
      );

      useEffect(() => {
         if (value) {
            const start = valueToPercent(value.start);
            const end = valueToPercent(value.end);
            dot1Ref.current?.update(start);
            dot2Ref.current?.update(end);
         }
      }, [value, valueToPercent]);

      useEffect(() => {
         const start = valueToPercent(defaultValue?.min ?? min);
         const end = valueToPercent(defaultValue?.max ?? max);
         if (!value) {
            setInternalSelectedRange({ start, end });
         }
         dot1Ref.current?.update(start);
         dot2Ref.current?.update(end);
      }, [min, max, defaultValue, valueToPercent, value]);

      const memoizedTracks = useMemo(() => isFixed && <Tracks values={rangeValues!.map(valueToPercent)} />, [isFixed, rangeValues, valueToPercent]);

      return (
         <div {...rest}>
            <div className='flex flex-col gap-2 w-full'>
               <div className='flex items-center gap-8'>
                  <div className='size-full flex m-auto relative items-center group'>
                     <div className='flex w-full'>
                        <Label
                           className='w-20 flex justify-center text-white/50 group-hover:text-white group-hover:bg-accent/25 transition-colors items-center bg-accent/5 border border-border text-xs rounded-l-md'
                           text={min}
                           onClick={!clickOnLabel || isFixed ? undefined : () => handleDotChange(1)(0)}
                           data-testid='range-label-min'
                        />
                        <div className='h-full w-full relative z-40 '>
                           <div className='absolute w-full h-full flex items-center'>
                              <Dot
                                 value={selectedRange.start}
                                 onChange={handleDotChange(1)}
                                 onRelease={handleDotRelease(1)}
                                 ref={dot1Ref}
                                 data-testid='dot1'
                              />
                              <Dot
                                 value={selectedRange.end}
                                 onChange={handleDotChange(2)}
                                 onRelease={handleDotRelease(2)}
                                 ref={dot2Ref}
                                 data-testid='dot2'
                              />
                           </div>
                           <Bar selectedRange={selectedRange} selectedColor={selectedColor} unselectedColor={unselectedColor} />
                           {memoizedTracks}
                        </div>
                        <Label
                           className='w-20 flex justify-center text-white/50 group-hover:text-white group-hover:bg-accent/25 transition-colors items-center bg-accent/5 border border-border text-xs rounded-r-md'
                           text={max}
                           onClick={!clickOnLabel || isFixed ? undefined : () => handleDotChange(2)(100)}
                           data-testid='range-label-max'
                        />
                     </div>
                  </div>
               </div>
            </div>

            <div className='flex w-full mt-4 justify-between'>
               <Input
                  type='number'
                  className='w-20 text-xs text-center pl-0 pr-8'
                  data-testid='input1'
                  disabled={isFixed}
                  min={min}
                  max={max}
                  value={percentToValue(selectedRange.start).toFixed(isFixed ? 2 : 0)}
                  onChange={(e) => handleInputChange(1)(Number(e.target.value))}
                  onIncrement={handleIncrement(1)}
                  onDecrement={handleDecrement(1)}
               />
               <Input
                  type='number'
                  className='w-20 text-xs text-center pl-0 pr-8'
                  data-testid='input2'
                  disabled={isFixed}
                  min={min}
                  max={max}
                  value={percentToValue(selectedRange.end).toFixed(isFixed ? 2 : 0)}
                  onChange={(e) => handleInputChange(2)(Number(e.target.value))}
                  onIncrement={handleIncrement(2)}
                  onDecrement={handleDecrement(2)}
               />
            </div>
         </div>
      );
   }
);

Range.displayName = "Range";

export default Range;
