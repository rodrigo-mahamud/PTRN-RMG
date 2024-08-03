import React, { Suspense } from "react";
import RangeWrapper from "@/components/RangeWrapper";
import Skeleton from "@/components/ui/skeleton";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const page: React.FC = () => {
   return (
      <Card>
         <CardHeader>
            <CardTitle>Rango Normal</CardTitle>
            <CardDescription>
               Slider interactivo que permite la selección de valores dentro de un rango predefinido. Integra etiquetas, límites ajustables vía{" "}
               <a href='https://ptr-back-api.vercel.app/api/v1/normalrange' target='_blank' rel='noopener noreferrer'>
                  API
               </a>
            </CardDescription>
         </CardHeader>

         <Suspense fallback={<Skeleton />}>
            <RangeWrapper isFixed={false} />
         </Suspense>
      </Card>
   );
};

export default page;
