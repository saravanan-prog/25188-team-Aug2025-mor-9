import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import CounterApp from './pages/react-useRef/CounterApp';
import ElementRef from './pages/react-useRef/ElementRef';
import Task from './pages/react-useRef/Task';
import SimpleWebpage from './pages/react-useRef/SimpleWebpage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <CounterApp /> */}
     {/* <ElementRef />
     */}

     <SimpleWebpage />

     {/* <Task /> */}
  </React.StrictMode> 
);

