import { configureStore } from "@reduxjs/toolkit";
import counterpagereducer from './pages/counter/slice/countepageSlice'

export const store = configureStore({
    reducer:{
        counter : counterpagereducer,
    }
})