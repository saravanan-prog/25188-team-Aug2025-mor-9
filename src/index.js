import React from 'react';
import ReactDOM from 'react-dom/client';
// import ConstructorImplementation from './react-component/class-component/ConstructorImplement';
// import ExampleClassComponent from './react-component/class-component/ExampleClassComponent';
// import FunctionComponent from './react-component/function-component/FunctionComponent';
// import ButtonClickEvent from './react-event/ButtonClickEvent';
// import ClasscomponentStateManagement from './react-state/cc/ClasscomponentStateManagement';
import FunctionComponent from './react-state/fc/FunctionComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ConstructorImplementation/> */}
    {/* <ExampleClassComponent/> */}
    {/* <FunctionComponent/> */}
    {/* <ButtonClickEvent/> */}
    {/* <ClasscomponentStateManagement/> */}
    <FunctionComponent/>






  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
