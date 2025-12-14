import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterPage from './pages/counter/CounterPage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { store } from './store';
import { Provider } from 'react-redux';
import AboutPage from './pages/about/AboutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store = {store}>
      <CounterPage/>
      <AboutPage/>
    </Provider>
    


  </React.StrictMode>
);

