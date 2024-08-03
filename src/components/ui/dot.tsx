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

   const handleMouseDown = useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      setDragging(true);
   }, []);

   React.useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         if (!dragging) return;
         const bar = dotRef.current?.parentElement;
         if (!bar) return;

         const rect = bar.getBoundingClientRect();
         let newValue = ((e.clientX - rect.left) / rect.width) * 100;
         newValue = Math.max(0, Math.min(100, newValue));

         updatePosition(newValue);
         onChange(newValue);
      };

      const handleMouseUp = () => {
         setDragging(false);
         onRelease(currentValue.current);
      };

      if (dragging) {
         document.addEventListener("mousemove", handleMouseMove);
         document.addEventListener("mouseup", handleMouseUp);
      }

      return () => {
         document.removeEventListener("mousemove", handleMouseMove);
         document.removeEventListener("mouseup", handleMouseUp);
      };
   }, [dragging, onChange, onRelease, updatePosition]);

   return (
      <div {...rest} ref={dotRef} className='tooltipDot'>
         <div className={`dot ${className || ""}`.trim()} style={{ cursor: dragging ? "grabbing" : "grab" }} onMouseDown={handleMouseDown} />
      </div>
   );
});

export default Dot;
