import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";

export const App: React.FC = () => {
   return (
      <Router>
         <div className='container'>
            <Routes>
               <Route path='/' element={<Index />} />
               <Route path='/exercise1' element={<Exercise1 />} />
               <Route path='/exercise2' element={<Exercise2 />} />
            </Routes>
         </div>
      </Router>
   );
};

export default App;
