import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todoSlice'
import {counterReducer} from "./features/counterSlice"
import ProductsListReducer  from './features/productListSlice'
import productReducer from './features/productSlice'


export const store = configureStore({
    reducer: {
        todo: todoReducer,
        counter: counterReducer,
        list: ProductsListReducer,
        productOne: productReducer
    }
})
