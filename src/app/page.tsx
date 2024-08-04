import BlurFade from "@/components/magicui/blur-fade";

export default function IndexPage() {
   return (
      <main className='relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl'>
         <BlurFade delay={0.35}>
            <h1 className='z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white'>
               Selectores de Rango
            </h1>
         </BlurFade>
      </main>
   );
}
