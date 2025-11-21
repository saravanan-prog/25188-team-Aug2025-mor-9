import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './Pages/react-module-css/Contact/Contact';
import AboutPage from './Pages/ReactCSS/About/about';
import Buttonreact from './Pages/Reactbootstrap/Button/Buttonreact';
import ExampleClassComponent from './pages/react-components/class_component/ExampleClassComponent';
import ExampleFunctionComponent from './pages/react-components/function_componet/ExampleFunctionComponent';
import ConstructorImplementation from './pages/react-components/class_component/ConstructorImplementation';
import ClasscomponentStateManagement from './pages/react-state/cc/ClasscomponentStateManagement';
import FunctionComponentState from './pages/react-state/fc/FunctionComponentStateMangement';
import FunctionComponentStateMangement from './pages/react-state/fc/FunctionComponentStateMangement';
import EmployeeManagemenet from './pages/react-state/cc/EmployeeManagement';
import ButtonClickEvent from './pages/react-events/fc/ButtonClickEvent';
import InputChangeEvent from './pages/react-events/fc/InputChangeEvent';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contact/>
    <AboutPage/>
    <Buttonreact/>
     {/* <ExampleClassComponent /> */}
      {/* <ExampleFunctionComponent /> */}
      {/* <ConstructorImplementation /> */}
      {/* <ClasscomponentStateManagement /> */}
      {/* <FunctionComponentStateMangement /> */}
      {/* <EmployeeManagemenet /> */}
      {/* < ButtonClickEvent/> */}
      <InputChangeEvent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

    


