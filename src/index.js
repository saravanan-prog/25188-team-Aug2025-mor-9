import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import MainRoute from './Router/MainRoute';
import { BrowserRouter } from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <MainRoute />
      </BrowserRouter>
    
  </React.StrictMode> 
);

