import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllproduct = createAsyncThunk( "product/getAllproduct",
    async () =>{
        let response = await axios.get("https://fakestoreapi.com/products")
        return response?.data
    }
)

export const getSingleProduct = createAsyncThunk( "product/singleProduct",
    async (id) =>{
        let response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response?.data
    }
)