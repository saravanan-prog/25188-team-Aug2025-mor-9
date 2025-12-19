import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
    "GET/ProductList",
    async () => {
        let response = await axios.get("https://fakestoreapi.com/products")
        return response?.data
    }
)


export const getSingleproduct = createAsyncThunk(
    "GET/singleProduct",
    async (id) => {
        let response = await axios.get("https://fakestoreapi.com/products/"+id)
        return response?.data
    }
)