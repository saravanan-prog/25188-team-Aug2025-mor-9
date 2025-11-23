import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './FunctionalComponent/Counter';
import InputChange from './FunctionalComponent/InputChange';
import AgeCounter from './FunctionalComponent/AgeCounter';
import MultipleObjectUpdate from './FunctionalComponent/MultipleObjectUpdate';
import ObjectUpdate from './FunctionalComponent/ObjectUpdate';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 {/* < Counter/> */}
 {/* <InputChange/> */}
 {/* <AgeCounter/> */}
 <MultipleObjectUpdate/>
 {/* <ObjectUpdate/> */}
  </React.StrictMode>
);

