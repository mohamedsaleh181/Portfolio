import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://fakestoreapi.com/products";

export const getProduct = createAsyncThunk(
    'product/getProduct',
    (id)=>{
        return fetch(`${baseURL}/${id}`)
        .then((res) => res.json())
        .then((json) => json);
    }
)

const initialState ={
    product: {},
    loading: false,
    error: {}
}

const ProductSlice = createSlice({
    name:"productOne",
    initialState,
    extraReducers:{
        [getProduct.pending]:(state)=>{
            state.loading = true;
        },
        [getProduct.fulfilled]:(state,action)=>{
            state.loading = false;
            state.product = action.payload
        },
        [getProduct.rejected]:(state,action)=>{
            state.loading= false;
            state.error = action.payload
        }

    }
})
export default ProductSlice.reducer;
