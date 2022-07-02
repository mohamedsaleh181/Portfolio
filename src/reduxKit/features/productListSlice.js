import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://fakestoreapi.com/products";

export const getProductList = createAsyncThunk(
    'products/getProductList',
    ()=>{
        return fetch(baseURL)
        .then((res) => res.json())
        .then((json) => json);
    }
)
const initialState = {
    products: [
    ],
    loading: false,
    error: {}
};
const ProductsListSlice = createSlice({
    name:"list",
    initialState,
    extraReducers:{
        [getProductList.pending]:(state)=>{
            state.loading = true
        },
        [getProductList.fulfilled]:(state,action)=>{
            state.loading = false;
            state.products = action.payload
        },
        [getProductList.rejected]:(state,action)=>{
            state.loading= false
            state.error = action.payload
        }

    }
})


export default ProductsListSlice.reducer;
