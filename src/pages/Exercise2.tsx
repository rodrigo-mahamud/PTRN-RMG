import React, { Suspense } from "react";
import RangeWrapper from "../components/RangeWrapper";
import Skeleton from "../components/ui/skeleton";
import ErrorBoundary from "../components/ErrorBoundary";
import Card from "../components/Card";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Exercise2: React.FC = () => {
   return (
      <div className='exercise-container'>
         <div className='backContainer'>
            <Link className='back' to='/'>
               <IconArrowNarrowLeft size={20} stroke={1.5}></IconArrowNarrowLeft>
               Inicio
            </Link>
         </div>
         <Card>
            <div>
               <h1>Rangos Fijos</h1>
               <h2>
                  Slider interactivo para seleccionar valores discretos de un conjunto predefinido. Utiliza rangos específicos de una{" "}
                  <a href='https://ptr-back-api.vercel.app/api/v1/fixedrange' target='_blank' rel='noopener noreferrer'>
                     API
                  </a>{" "}
                  , con etiquetas fijas y feedback visual para una selección precisa y controlada.
               </h2>
            </div>
            <ErrorBoundary fallback={<div className='errorBoundary'>Algo salió mal, vuelve a intentarlo de nuevo más tarde.</div>}>
               <Suspense fallback={<Skeleton />}>
                  <RangeWrapper isFixed={true} />
               </Suspense>
            </ErrorBoundary>
         </Card>
      </div>
   );
};

export default Exercise2;
