import BlurFade from "@/components/magicui/blur-fade";
import Container from "@/components/ui/container";
import { IconChevronCompactDown, IconChevronsDown } from "@tabler/icons-react";

export default function IndexPage() {
   return (
      <Container className='md:max-w-3xl flex flex-col h-1/2 justify-center md:justify-end'>
         <BlurFade delay={0.5}>
            <h1 className='z-10 whitespace-pre-wrap text-center text-4xl md:text-5xl mb-6 font-medium tracking-tighter text-black dark:text-white'>
               Selectores de Rango
            </h1>
         </BlurFade>
         <BlurFade delay={0.75}>
            <h2 className='z-10 whitespace-pre-wrap text-center text-base md:text-xl font-extralight text-black/75 dark:text-white/75 text-pretty'>
               Componentes de rango personalizados en React con dos variantes: un rango numérico ajustable y un selector de valores predefinidos.
            </h2>
         </BlurFade>
         <BlurFade delay={1}>
            <div className='flex w-full justify-center items-center'>
               <IconChevronsDown size={95} stroke={0.25}></IconChevronsDown>
            </div>
         </BlurFade>
      </Container>
   );
}
