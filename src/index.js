import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import CounterApp from './pages/react-before-usememo/CounterApp';
import CounterAppusememo from './pages/react-before-usememo/CounterAppusememo';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <CounterApp/> */}
      <CounterAppusememo />
  </React.StrictMode> 
);

