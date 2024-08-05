"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ToggleTheme() {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   const toggleTheme = () => {
      if (theme === "dark") {
         setTheme("light");
      }
      if (theme === "light") {
         setTheme("dark");
      }
   };

   if (!mounted) {
      return null;
   }

   return (
      <Button variant='outline' size='icon' onClick={toggleTheme} className='border-none rounded-full'>
         {theme === "dark" ? <IconMoon className='h-[1.2rem] w-[1.2rem] absolute' /> : <IconSun className='h-[1.2rem] w-[1.2rem] absolute' />}
         <span className='sr-only'>Toggle theme</span>
      </Button>
   );
}
