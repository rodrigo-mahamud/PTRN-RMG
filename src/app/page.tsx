import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import BlurFade from "@/components/magicui/blur-fade";

export default function IndexPage() {
   return (
      <main className='relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl'>
         <BlurFade delay={0.3}>
            <h1 className='z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white'>
               Selectores de Rango
            </h1>
         </BlurFade>
         <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn("[mask-image:radial-gradient(750px_circle_at_center,white,transparent)]", "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12")}
         />
      </main>
   );
}
