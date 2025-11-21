import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './Pages/react-module-css/Contact/Contact';
import AboutPage from './Pages/ReactCSS/About/about';
import Buttonreact from './Pages/Reactbootstrap/Button/Buttonreact';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contact/>
    <AboutPage/>
    <Buttonreact/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

