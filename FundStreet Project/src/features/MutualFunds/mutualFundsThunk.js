import { createAsyncThunk } from "@reduxjs/toolkit";
import {getData, getCategoryData } from "../../services/Api";

export const fetchMutualFunds = createAsyncThunk(
  "mutualFunds/fetchMutualFunds",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData();
      console.log("res - ", response);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch mutual funds");
    }
  }
);

export const fetchCategoryFunds = createAsyncThunk(
  "mutualFunds/fetchCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCategoryData();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch mutual funds");
    }
  }
);