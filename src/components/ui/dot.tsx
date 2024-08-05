"use client";
import React, { useState, useRef, forwardRef, useImperativeHandle, useCallback } from "react";
import { DotProps, DotRef } from "@/types";

const Dot = forwardRef<DotRef, DotProps>(function Dot({ value, onChange, onRelease, className, ...rest }, ref) {
   const [dragging, setDragging] = useState(false);
   const dotRef = useRef<HTMLDivElement>(null);
   const currentValue = useRef(value);

   const updatePosition = useCallback((newValue: number) => {
      if (dotRef.current) {
         dotRef.current.style.left = `${newValue}%`;
      }
      currentValue.current = newValue;
   }, []);

   useImperativeHandle(ref, () => ({ update: updatePosition }), [updatePosition]);

   React.useEffect(() => {
      updatePosition(value);
   }, [value, updatePosition]);

   const handleStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      setDragging(true);
   }, []);

   const handleMove = useCallback(
      (clientX: number) => {
         if (!dragging) return;
         const bar = dotRef.current?.parentElement;
         if (!bar) return;

         const rect = bar.getBoundingClientRect();
         let newValue = ((clientX - rect.left) / rect.width) * 100;
         newValue = Math.max(0, Math.min(100, newValue));

         updatePosition(newValue);
         onChange(newValue);
      },
      [dragging, onChange, updatePosition]
   );

   const handleEnd = useCallback(() => {
      setDragging(false);
      onRelease(currentValue.current);
   }, [onRelease]);

   React.useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
      const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

      if (dragging) {
         document.addEventListener("mousemove", handleMouseMove);
         document.addEventListener("touchmove", handleTouchMove, { passive: false });
         document.addEventListener("mouseup", handleEnd);
         document.addEventListener("touchend", handleEnd);
      }

      return () => {
         document.removeEventListener("mousemove", handleMouseMove);
         document.removeEventListener("touchmove", handleTouchMove);
         document.removeEventListener("mouseup", handleEnd);
         document.removeEventListener("touchend", handleEnd);
      };
   }, [dragging, handleMove, handleEnd]);

   return (
      <div
         {...rest}
         ref={dotRef}
         className={`h-8 w-4 absolute z-50 bg-neutral-100 dark:bg-[#191919] rounded-full -ml-2 first: border hover:w-8 hover:-ml-4 transition-spacing hover:scale-110 border-white/10 shadow-[0_1px_6px_#00000026] ${className}`}
         style={{ cursor: dragging ? "grabbing" : "grab" }}
         onMouseDown={handleStart}
         onTouchStart={handleStart}
      />
   );
});

export default Dot;
