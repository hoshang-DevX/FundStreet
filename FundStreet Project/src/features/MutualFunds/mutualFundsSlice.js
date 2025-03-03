import { createSlice } from "@reduxjs/toolkit";
import { fetchMutualFunds, fetchCategoryFunds } from "./mutualFundsThunk";

const initialState = {
  funds: [],
  loading: false,
  error: null,
};

const mutualFundsSlice = createSlice({
  name: "mutualFunds",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchMutualFunds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMutualFunds.fulfilled, (state, action) => {
        state.loading = false;
        state.funds = action.payload;
      })
      .addCase(fetchMutualFunds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch category funds
      .addCase(fetchCategoryFunds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoryFunds.fulfilled, (state, action) => {
        state.loading = false;
        state.funds = action.payload;
      })
      .addCase(fetchCategoryFunds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default mutualFundsSlice.reducer;