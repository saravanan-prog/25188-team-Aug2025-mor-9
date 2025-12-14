import { configureStore } from "@reduxjs/toolkit";
import productReducer from './pages/product/slice/productpageslice'

 


export const store = configureStore({
    reducer :{
        product : productReducer
    }
})