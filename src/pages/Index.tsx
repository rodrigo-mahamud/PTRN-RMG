import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Index: React.FC = () => {
   return (
      <div className='home-container'>
         <Card>
            <div>
               <h1>Selectores de rango.</h1>
               <h2>
                  Componentes de rango personalizados en React con dos variantes: un rango numérico ajustable y un selector de valores predefinidos.
               </h2>
            </div>
            <div className='button-container'>
               <Link to='/exercise1' className='back'>
                  Rango Normal
               </Link>
               <Link to='/exercise2' className='back'>
                  Rango Fijo
               </Link>
            </div>
         </Card>
      </div>
   );
};

export default Index;
