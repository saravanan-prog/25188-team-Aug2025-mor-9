import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ProductPage from './pages/products/ProductPage';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <Provider store={store}>
         <ProductPage/>
      </Provider>
      
     


  </div>
);

