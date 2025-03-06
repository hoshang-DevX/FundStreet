import { createAsyncThunk } from "@reduxjs/toolkit";
// import {getData, getCategoryData} from "../../services/Api";
import axios  from "axios";
// import { useParams } from "react-router-dom";

 const baseurl = import.meta.env.VITE_PUBLIC_BASE_URL
//  const params = useParams()
 
 export const fetchMutualFunds = createAsyncThunk(
   "mutualFunds/fetchMutualFunds",
   async ( { category }, { rejectWithValue }) => {
     try {
       console.log('in try block')
       const response = await axios.get(`${baseurl}/api/v1/mutual_funds/filter`,{
         params : {
           selected_columns: "ytd_return",
           page: 1,
           category,
           page_size: 20
          },
          headers: {
            // "User-Agent": "MyCustomUserAgent/1.0",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
            // "User-Agent": "my-custom-user-agent",
          }
      });

      // console.log("res - ", response);
      // console.log('got response')

      // console.log(response.data)
      return  { category, funds: response.data.data };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch mutual funds");
    }
  }
);

export const fetchCategoryFunds = createAsyncThunk(
  "mutualFunds/fetchCategory",
  async (_,{ rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseurl}/api/v1/mutual_funds_category` , {
        params : {
          selected_columns: "ytd_return",
          page: 1,
          category: 1,
          page_size: 20
        },
        headers: {
          // "User-Agent": "MyCustomUserAgent/1.0",
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
          // "User-Agent": "my-custom-user-agent",
        }
      });
      console.log("Response received:", response.data);
      // const {status , message , data} = response.data
      // return{id : data.id, name : data.name , desc : data.desc , status, message}

      // return { categories: data, status, message };

      if (!response.data || !response.data.data) {
        throw new Error("Invalid API response");
      }
      const {data} = response.data
      const categories = response.data.data.map(item => item.id); 
      console.log('categories',categories)

      return { categories,data }; 
      
      

    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch mutual funds");
    }
  }
);