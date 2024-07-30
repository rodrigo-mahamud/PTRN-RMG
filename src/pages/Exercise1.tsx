import React, { Suspense } from "react";
import RangeWrapper from "../components/RangeWrapper";
import Skeleton from "../components/ui/skeleton";
import ErrorBoundary from "../components/ErrorBoundary";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { IconArrowNarrowLeft } from "@tabler/icons-react";

const Exercise1: React.FC = () => {
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
               <h1>Rango Normal</h1>
               <h2>
                  Slider interactivo que permite la selección de valores dentro de un rango predefinido. Integra etiquetas, límites ajustables vía{" "}
                  <a href='https://ptr-back-api.vercel.app/api/v1/normalrange' target='_blank' rel='noopener noreferrer'>
                     API
                  </a>{" "}
                  y feedback visual para una experiencia de usuario óptima.
               </h2>
            </div>
            <ErrorBoundary fallback={<div className='errorBoundary'>Algo salió mal, vuelve a intentarlo de nuevo más tarde.</div>}>
               <Suspense fallback={<Skeleton />}>
                  <RangeWrapper isFixed={false} />
               </Suspense>
            </ErrorBoundary>
         </Card>
      </div>
   );
};

export default Exercise1;
