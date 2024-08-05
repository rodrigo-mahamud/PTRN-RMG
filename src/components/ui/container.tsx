import { cn } from "@/lib/utils";
import React from "react";
interface containerTypes {
   children: React.ReactNode;
   className?: string;
}
export default function Container({ children, className }: containerTypes) {
   return <div className={cn(" container relative md:py-32 md:px-8 px-3", className)}>{children}</div>;
}
