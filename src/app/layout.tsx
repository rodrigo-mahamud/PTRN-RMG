import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavDock } from "@/components/NavDock";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

const AppThemeProvider = dynamic(() => import("@/components/AppThemeProvider"), {
   ssr: false,
});

export const metadata: Metadata = {
   title: {
      default: "PTRN-RMG",
      template: "%s | Mi Aplicación",
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

   const theme = cookies().get("__theme__")?.value || "system";

   return (
      <html lang='es' className={theme} style={theme !== "system" ? { colorScheme: theme } : {}}>
         <body className={inter.className}>
            <AppThemeProvider attribute='class' defaultTheme={theme} enableSystem>
               <main className='flex h-screen w-full items-center justify-center overflow-hidden'>{children}</main>
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
            </AppThemeProvider>
         </body>
      </html>
   );
}
