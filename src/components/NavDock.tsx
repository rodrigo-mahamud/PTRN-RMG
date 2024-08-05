import React from "react";
import Link from "next/link";
import * as Icons from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import NavData from "@/routes";
import { ToggleTheme } from "./ToggleTheme";
import BlurFade from "./magicui/blur-fade";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function NavDock() {
   return (
      <div className='fixed flex bottom-8 w-full flex-col items-center justify-center '>
         <TooltipProvider>
            <BlurFade delay={0} yOffset={40} className='backdrop-blur-sm'>
               <Dock direction='middle' className='mt-0'>
                  {NavData.navbar.map((item) => {
                     const IconComponent = (Icons as any)[item.icon] || Icons.IconQuestionMark;

                     return (
                        <DockIcon key={item.label}>
                           <Tooltip>
                              <TooltipTrigger asChild>
                                 <Link href={item.href} className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12 rounded-full")}>
                                    <IconComponent className='h-[1.3rem] w-[1.3rem]' />
                                 </Link>
                              </TooltipTrigger>
                              <TooltipContent>
                                 <p>{item.label}</p>
                              </TooltipContent>
                           </Tooltip>
                        </DockIcon>
                     );
                  })}
                  <Separator orientation='vertical' className='h-full' />
                  <DockIcon>
                     <ToggleTheme></ToggleTheme>
                  </DockIcon>
               </Dock>
            </BlurFade>
         </TooltipProvider>
      </div>
   );
}
