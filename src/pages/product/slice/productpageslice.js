import { createSlice } from "@reduxjs/toolkit";
import { getAllproduct ,getSingleProduct} from "../thunk/productListthunk";


export const productSlice = createSlice({
    name :"products",
    initialState:{
        loading:false,
        error:null,
        data:[]
    },
    reducers:{},
     extraReducers: (builder) => {
    builder
       //getAllproduct
       
      .addCase(getAllproduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllproduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //getSignleProduct
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      
      
      
      ;


  },
})


export default productSlice.reducer;