import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { store } from './store';
import { Provider } from 'react-redux';
import ProductListpage from './pages/product/ProductListpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store = {store}>
      <ProductListpage/>
    </Provider>
    


  </React.StrictMode>
);

