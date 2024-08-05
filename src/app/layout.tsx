import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavDock } from "@/components/NavDock";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { ThemeProvider } from "@/components/ThemeProvider";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: {
      default: "PTRN-RMG",
      template: "%s | PTRN-RMG",
   },
   description: "Prueba técnica realizada con Next.js",
   icons: {
      icon: "/assets/favicon.png",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const opacityVariant = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   };
   //suppressHydrationWarning: No es para nada recomendable, pero parece haber un error con ThemeProvider y el app router
   //por el que recomiendan usarlo hasta que se solucione.
   return (
      <html lang='es' suppressHydrationWarning>
         <body className={inter.className}>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
               <main className=' flex h-screen w-full items-center justify-center overflow-hidden '>{children}</main>

               <NavDock></NavDock>

               <BlurFade delay={0} variant={opacityVariant}>
                  <div className='absolute top-0 h-screen w-full overflow-hidden -z-10'>
                     <AnimatedGridPattern
                        numSquares={30}
                        maxOpacity={0.1}
                        duration={3}
                        repeatDelay={1}
                        className={cn(
                           "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                           "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12"
                        )}
                     />
                  </div>
               </BlurFade>
            </ThemeProvider>
         </body>
      </html>
   );
}
