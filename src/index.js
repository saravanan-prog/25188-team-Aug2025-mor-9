import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import { store } from './store';
import CounterPage from './pages/counter/CouterPage';
import SientificCalculator from './pages/sientific-calc/SientificCalculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Provider store={store}>
          <CounterPage />
          <SientificCalculator />
      </Provider>
     


  </React.StrictMode>
);

