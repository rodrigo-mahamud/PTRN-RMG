"use client";
import React, { useState, useRef, useCallback, useMemo } from "react";
import Tracks from "./tracks";
import Dot from "./dot";
import Bar from "./bar";
import Label from "./label";
import { RangeProps, DotRef, SelectedRange } from "@/types";
import { useValueToPercent } from "@/hooks/useValueToPercent";
import { usePercentToValue } from "@/hooks/usePercentToValue";

const Range: React.FC<RangeProps> = React.memo(
   ({
      min = 0,
      max = 100,
      defaultValue,
      rangeValues,
      clickOnLabel,
      isFixedRange,
      minDistance = 0,
      selectedColor = "#3b82f6",
      unselectedColor = "#dae3f4",
      onChange,
      ...rest
   }) => {
      const [selectedRange, setSelectedRange] = useState<SelectedRange>(() => ({
         start: defaultValue?.min ?? min,
         end: defaultValue?.max ?? max,
      }));

      const dot1Ref = useRef<DotRef>(null);
      const dot2Ref = useRef<DotRef>(null);

      const valueToPercent = useValueToPercent({ min, max, rangeValues });
      const percentToValue = usePercentToValue({ min, max, rangeValues });

      const getNearestFixedValue = useCallback(
         (percent: number) => {
            if (!isFixedRange) return percent;
            const value = percentToValue(percent);
            const nearestValue = rangeValues!.reduce((prev, curr) => (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev));
            return valueToPercent(nearestValue);
         },
         [isFixedRange, rangeValues, percentToValue, valueToPercent]
      );

      const updateRange = useCallback(
         (start: number, end: number) => {
            const newStart = percentToValue(start);
            const newEnd = percentToValue(end);
            setSelectedRange({ start, end });
            onChange?.(newStart, newEnd);
         },
         [percentToValue, onChange]
      );

      const handleDotChange = useCallback(
         (dotIndex: 1 | 2) => (value: number) => {
            const otherDotValue = dotIndex === 1 ? selectedRange.end : selectedRange.start;
            const minDistancePercent = valueToPercent(minDistance);

            let newStart, newEnd;
            if (dotIndex === 1) {
               newStart = Math.min(value, 100 - minDistancePercent);
               newEnd = Math.max(newStart + minDistancePercent, otherDotValue);
            } else {
               newEnd = Math.max(value, minDistancePercent);
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

      React.useEffect(() => {
         const start = valueToPercent(defaultValue?.min ?? min);
         const end = valueToPercent(defaultValue?.max ?? max);
         setSelectedRange({ start, end });
         dot1Ref.current?.update(start);
         dot2Ref.current?.update(end);
      }, [min, max, defaultValue, valueToPercent]);

      const memoizedTracks = useMemo(
         () => isFixedRange && <Tracks values={rangeValues!.map(valueToPercent)} />,
         [isFixedRange, rangeValues, valueToPercent]
      );

      return (
         <div {...rest} className='range'>
            <div className='labelsContainer'>
               <Label text={min} onClick={!clickOnLabel || isFixedRange ? undefined : () => handleDotChange(1)(0)} data-testid='range-label-min' />
               <Label text={max} onClick={!clickOnLabel || isFixedRange ? undefined : () => handleDotChange(2)(100)} data-testid='range-label-max' />
            </div>
            <div className='range-wrapper'>
               <div className='rangeFlex'>
                  <div className='bar-wrapper'>
                     <Dot
                        value={selectedRange.start}
                        onChange={handleDotChange(1)}
                        onRelease={handleDotRelease(1)}
                        ref={dot1Ref}
                        data-testid='dot1'
                     />
                     <Dot value={selectedRange.end} onChange={handleDotChange(2)} onRelease={handleDotRelease(2)} ref={dot2Ref} data-testid='dot2' />
                     <Bar selectedRange={selectedRange} selectedColor={selectedColor} unselectedColor={unselectedColor} />
                     {memoizedTracks}
                  </div>
               </div>
            </div>

            <div className='inputContainer'>
               <input
                  type='number'
                  data-testid='input1'
                  disabled={isFixedRange ? true : false}
                  min={min}
                  max={max}
                  value={percentToValue(selectedRange.start).toFixed(isFixedRange ? 2 : 0)}
                  onChange={(e) => handleInputChange(1)(Number(e.target.value))}
               />
               <input
                  type='number'
                  data-testid='input2'
                  disabled={isFixedRange ? true : false}
                  min={min}
                  max={max}
                  value={percentToValue(selectedRange.end).toFixed(isFixedRange ? 2 : 0)}
                  onChange={(e) => handleInputChange(2)(Number(e.target.value))}
               />
            </div>
         </div>
      );
   }
);

Range.displayName = "Range";

export default Range;
