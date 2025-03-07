import { createSlice } from "@reduxjs/toolkit";
import { fetchMutualFunds, fetchCategoryFunds } from "./mutualFundsThunk";

const initialState = {
  fundsByCategory: {},
  categories: [],
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
      // .addCase(fetchMutualFunds.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.loading = false;const { category } = action.meta.arg;
      //   state.fundsByCategory[category] = action.payload?.data || [];
      // })

      .addCase(fetchMutualFunds.fulfilled, (state, action) => {
        state.loading = false;
        const { category, funds } = action.payload;
        state.fundsByCategory[category.toLowerCase()] = funds;
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
        console.log('payload' , action.payload)
        state.categories = action.payload?.data|| [];
      })
      .addCase(fetchCategoryFunds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default mutualFundsSlice.reducer;