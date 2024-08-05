import React, { Suspense } from "react";
import RangeWrapper from "@/components/RangeWrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { SkeletonCard } from "@/components/SkeletonCard";
import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Rango normal ejercicio 1",
};
const page: React.FC = () => {
   const opacityVariant = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   };
   return (
      <Container className='flex justify-center items-center h-screen overflow-hidden relative'>
         <BlurFade delay={0.35} className='backdrop-blur-sm'>
            <Card className='max-w-xl mx-auto bg-card/30 shadow-lg dark:shadow-black relative'>
               <CardHeader className='mb-4 md:mb-0 md:pb-0'>
                  <CardTitle className='mb-1'>Rango Normal</CardTitle>
                  <CardDescription className='text-pretty'>
                     Slider interactivo que permite la selección de valores dentro de un rango predefinido. Integra etiquetas, límites ajustables vía{" "}
                     <a href='https://ptr-back-api.vercel.app/api/v1/normalrange' target='_blank' rel='noopener noreferrer'>
                        API
                     </a>
                  </CardDescription>
               </CardHeader>
               <CardContent>
                  <Suspense fallback={<SkeletonCard />}>
                     <RangeWrapper isFixed={false} />
                  </Suspense>
               </CardContent>
            </Card>
         </BlurFade>
      </Container>
   );
};

export default page;
