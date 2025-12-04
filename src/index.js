import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

//import BasicWebPage from './Pages/react-before-memo/BasicWebpage';
//import BasicWebPage from './Pages/react-after-memo/BasicWebpage';

import BasicWebPage from './Pages/react-after-memo-withprops/BasicWebpage';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
     <BasicWebPage />
     
      
     

  </React.StrictMode> 
);

