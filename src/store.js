import { configureStore } from "@reduxjs/toolkit";
import couterPageReducer from './pages/counter/slice/counterpageSlice'

export const store = configureStore({
    reducer:{
        counter:couterPageReducer
    }
})