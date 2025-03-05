import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import mutualFundsReducer from "../features/MutualFunds/mutualFundsSlice";

const store = configureStore({
    reducer :{
        auth : authReducer,
        mutualFunds: mutualFundsReducer,
    }
})
export default store