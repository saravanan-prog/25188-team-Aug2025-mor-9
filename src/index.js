import React from 'react';
import ReactDOM from 'react-dom/client';

//bootstrap and js import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Button from './react-bootstrap/Button';
import Product from "./react-css/AboutPage/Product";
import MovieCard from './react-css/inline-css/MovieCard';
import GalleryPage from './react-css/internal-css/GalleryPage';
import ProfileCard from './react-module-css/ProfileCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <Button/> */}
    {/* <Product/> */}
    {/* <MovieCard/> */}
    {/* <GalleryPage/> */}
    <ProfileCard/>







  </React.StrictMode>
);
