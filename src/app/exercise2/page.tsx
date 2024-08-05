import React, { Suspense } from "react";
import RangeWrapper from "@/components/RangeWrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { SkeletonCard } from "@/components/SkeletonCard";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Rangos fijos ejercicio 2",
};
const page: React.FC = () => {
   return (
      <>
         <Container className='flex justify-center items-center h-screen overflow-hidden'>
            <BlurFade delay={0.35} className='backdrop-blur-sm'>
               <Card className='max-w-xl mx-auto bg-card/30 backdrop-blur shadow-lg  dark:shadow-black'>
                  <CardHeader className='mb-4 md:mb-0 md:pb-0'>
                     <CardTitle className='text-xl md:text-2xl mb-0 md:mb-1'>Rangos Fijos</CardTitle>
                     <CardDescription className='text-pretty text-xs md:text-sm'>
                        Slider interactivo para seleccionar valores discretos de un conjunto predefinido. Utiliza rangos específicos de una{" "}
                        <a href='https://ptr-back-api.vercel.app/api/v1/fixedrange' target='_blank' rel='noopener noreferrer'>
                           API
                        </a>
                        , con etiquetas fijas y feedback visual para una selección precisa y controlada.
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <Suspense fallback={<SkeletonCard />}>
                        <RangeWrapper isFixed={true} />
                     </Suspense>
                  </CardContent>
               </Card>
            </BlurFade>
         </Container>
      </>
   );
};

export default page;
