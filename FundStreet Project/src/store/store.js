import { configureStore } from "@reduxjs/toolkit";
import mutualFundsReducer from "../features/MutualFunds/mutualFundsSlice";

const store = configureStore({
  reducer: {
    mutualFunds: mutualFundsReducer,
  },
});

export default store;