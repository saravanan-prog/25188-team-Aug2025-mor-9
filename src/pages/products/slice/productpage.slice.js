import { createSlice } from "@reduxjs/toolkit";
import { getProduct, getSingleproduct } from "../thunk/productpage.thunk";

export const productpageslice = createSlice({
    name:"products",
    initialState:{
        loading:false,
        error:null,
        data:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        //Get product
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.loading = false
            state.error = null
            state.data = action.payload
        })
        builder.addCase(getProduct.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(getProduct.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
            state.data = null
        })


         //Get single product
        builder.addCase(getSingleproduct.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(getSingleproduct.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(getSingleproduct.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
            state.data = null
        })
    }
})

export default productpageslice.reducer;