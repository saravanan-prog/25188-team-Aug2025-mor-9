import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
//import BasicWebpage from './Pages/react-before-useCallback/BasicWebpage';
import BasicWebpage from './Pages/react-after-useCallback/BasicWebpage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BasicWebpage /> 

  </React.StrictMode> 
);

