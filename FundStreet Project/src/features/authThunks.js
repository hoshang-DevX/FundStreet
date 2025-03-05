import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// we have  sendOtp, verifyOtp, logInWithPassword, logout

const baseurl = import.meta.env.VITE_PUBLIC_BASE_URL

export const sendOtp = createAsyncThunk(
    "auth/sendOtp", async (mobile_no,{rejectWithValue}) =>{
        try {
            const response = await axios.post(`${baseurl}/api/v1/otp_user_auth`,{ mobile_no})
            const {data} = response.data
            if(data?.token){
                localStorage.setItem("token",data.token)
            }

            return response.data                    // get this checked that is this returned data type is fine ? 
        } catch (error) {
            return rejectWithValue(error.response.value)
        }
    }
)
export const verifyOtp = createAsyncThunk(
    
    "auth/verifyOtp", async({mobile_no ,otpString},{rejectWithValue}) =>{
        try {
            const token = localStorage.getItem("token")
            const headers = token ? {Authorization : token} : {}    // also expected by the API

            const response = await axios.post(`${baseurl}/api/v1/otp_verification`, { mobile_no , otp : otpString} , {headers} )
            
            const {status , message , data} =  response.data
            localStorage.setItem( "token" , data.token)        // requires key and value
            return {user : data.credentials , token : data.token , message, status}
        } catch (error) {
            console.error("API Error:", error.response?.data || error.message);
            return rejectWithValue(error.response?.data?.message || 'Error Verifying the OTP' )
        }
    }
)

// next thunk for logInWithPassword
export const logInWithPassword = createAsyncThunk(
    "auth/logInWithPassword", async({mobile_no,password},{rejectWithValue})=>{
        try {
            const remember_me = false
            console.log('sending request',mobile_no,password);            // check
            const response = await axios.post(`${baseurl}/api/v1/password_user_auth`, {mobile_no,password,remember_me})
            

            
            console.log('getting the data', response.data);
            const { data,status, message} = response.data
            localStorage.setItem("token",data.token)

            return {user : data.credentials , token : data.token , message , status}
            // return response.data
        } catch (error) {
            console.log('error hogya',error.data?.response?.message || "LOGIN failed" );
           return rejectWithValue(error.response?.data?.message || 'Login Failed' )
        }
    }
)

export default {sendOtp,verifyOtp,logInWithPassword}