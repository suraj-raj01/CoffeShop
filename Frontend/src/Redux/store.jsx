import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./Slice";

const store = configureStore({
    reducer:{
        addToOrders:myReducer
    }
})
export default store;