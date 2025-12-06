import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ExampleForm from './pages/react-basic-form/ExampleForm';
import ExampleApicall from './pages/react-basic-form/ExampleFormApicall';
import CustomFieldForm from './pages/react-customFieldForm/CustomFieldForm';
import ExampleFormik from './pages/react-formik/ExampleFormik';
import ExampleFormikValidation from './pages/react-formik/ExampleFromikValidation';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      
      {/* <ExampleForm /> */}
      {/* <ExampleApicall/> */}
      {/* <CustomFieldForm /> */}
      {/* <ExampleFormik /> */}
      <ExampleFormikValidation />
    
     

    </React.StrictMode>
   
);

