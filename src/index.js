import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import FirstWebpage from './pages/FirstWebpage';
import ProductList from './pages/ProductList';
import UserList from './pages/UserList';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <FirstWebpage /> */}
     {/* <ProductList /> */}
     <UserList />
  </React.StrictMode> 
);

