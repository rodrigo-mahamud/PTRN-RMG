"use client";

import React, { useEffect } from "react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ToggleTheme() {
   const { theme, setTheme } = useTheme();

   const toggleTheme = () => {
      if (theme === "system") {
         const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark";
         setTheme(systemTheme);
      } else {
         setTheme("system");
      }
   };

   return (
      <Button variant='outline' size='icon' onClick={toggleTheme} className='border-none rounded-full'>
         <IconSun className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
         <IconMoon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
         <span className='sr-only'>Toggle theme</span>
      </Button>
   );
}
