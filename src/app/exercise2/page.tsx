import React, { Suspense } from "react";
import RangeWrapper from "@/components/RangeWrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { SkeletonCard } from "@/components/SkeletonCard";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
const page: React.FC = () => {
   return (
      <>
         <Container className='flex justify-center items-center h-screen overflow-hidden'>
            <Card className='max-w-xl mx-auto bg-card/30 backdrop-blur shadow-lg  dark:shadow-black'>
               <CardHeader>
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
                     <RangeWrapper isFixed={true} />
                  </Suspense>
               </CardContent>
            </Card>
            <AnimatedGridPattern
               numSquares={100}
               maxOpacity={0.1}
               duration={3}
               repeatDelay={1}
               className={cn(
                  "[mask-image:radial-gradient(750px_circle_at_center,white,transparent)]",
                  "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12 -z-10 "
               )}
            />
         </Container>
      </>
   );
};

export default page;
