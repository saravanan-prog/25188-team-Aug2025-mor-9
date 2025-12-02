import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ComplexCalc from './pages/react-complex-state/ComplexCalc';
import ReducerCalculator from './pages/react-hook-useReducer/ReducerCalculator';
import StudentInformation from './pages/react-studentinfo-useReducer/StudentInformation';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      
     {/* <ComplexCalc /> */}

     {/* <ReducerCalculator /> */}

     <StudentInformation />
    
     

    </React.StrictMode>
   
);

