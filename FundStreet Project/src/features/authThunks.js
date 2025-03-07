import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// we have  sendOtp, verifyOtp, logInWithPassword, signUp

        // sendOTP format
// {
//     "status": true,
//     "message": "Successfully logged in to the Dashboard.",
//     "data": {
//         "credentials": "+916006641324",
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoibG9naW4iLCJjcmVhdGlvbl90aW1lIjoxNzQwNTA3Mjk4LjAyODQzOSwiZXhwaXJ5IjoxNzQwNTI1Mjk4LjAyODQ0LCJlbWFpbCI6bnVsbCwibW9iaWxlX251bWJlciI6Iis5MTYwMDY2NDEzMjQifQ.4hqAPhzxODUAVcBhJThLX2YSaLLnN-I2v4JHJ_jXAXs",
//         "user_id": 714,
//         "questionnaire_filled": false
//     },
//     "status_code": 200
// }

        // verify OTP Format
        // {
        //     "status": true,
        //     "message": "Successfully logged in to the Dashboard.",
        //     "data": {
        //         "credentials": "+916006641324",
        //         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoibG9naW4iLCJjcmVhdGlvbl90aW1lIjoxNzQwNTA3Mjk4LjAyODQzOSwiZXhwaXJ5IjoxNzQwNTI1Mjk4LjAyODQ0LCJlbWFpbCI6bnVsbCwibW9iaWxlX251bWJlciI6Iis5MTYwMDY2NDEzMjQifQ.4hqAPhzxODUAVcBhJThLX2YSaLLnN-I2v4JHJ_jXAXs",
        //         "user_id": 714,
        //         "questionnaire_filled": false
        //     },
        //     "status_code": 200
        // }        

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