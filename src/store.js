import { configureStore } from "@reduxjs/toolkit";
import productReducer from './pages/products/slice/productpage.slice'


export const store = configureStore({
    reducer:{
        product: productReducer
    }
})