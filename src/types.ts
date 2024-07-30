import { ReactNode } from "react";

export interface RangeProps {
   min?: number;
   max?: number;
   isFixedRange: boolean;
   defaultValue?: { min: number; max: number };
   rangeValues?: number[];
   clickOnLabel?: boolean;
   minDistance?: number;
   selectedColor?: string;
   unselectedColor?: string;
   onChange?: (start: number, end: number) => void;
}

export interface DotRef {
   update: (value: number) => void;
}

export interface SelectedRange {
   start: number;
   end: number;
}

// Tipos adicionales que podrían ser necesarios en otros componentes
export interface TrackProps {
   values: number[];
}

export interface DotProps {
   value: number;
   onChange: (value: number) => void;
   onRelease: (value: number) => void;
}

export interface BarProps {
   selectedRange: SelectedRange;
   selectedColor: string;
   unselectedColor: string;
}

export interface LabelProps {
   text: number | string;
   onClick?: () => void;
}
export interface DotProps {
   value: number;
   onChange: (value: number) => void;
   onRelease: (value: number) => void;
   className?: string;
}

export interface DotRef {
   update: (v: number) => void;
}
export interface BarProps {
   selectedRange: { start: number; end: number };
   selectedColor: string;
   unselectedColor: string;
   className?: string;
}
export interface ErrorBoundaryProps {
   children?: ReactNode;
   fallback?: ReactNode;
}

export interface ErrorBoundaryState {
   hasError: boolean;
}
export interface LabelProps {
   className?: string;
   text: number | string;
   onClick?: () => void;
}
export interface RangeWrapperProps {
   isFixed: boolean;
}

export interface RangeData {
   min: number;
   max: number;
   range?: number[];
   default?: {
      min: number;
      max: number;
   };
}
export interface TracksProps {
   values: number[];
}

export interface RangeData {
   min: number;
   max: number;
   range?: number[];
   default?: {
      min: number;
      max: number;
   };
}

export type CacheEntry = {
   data: RangeData | Error;
   expiry: number;
};

export type Cache = { [key: string]: CacheEntry };

export type CardProps = {
   children: ReactNode;
};
