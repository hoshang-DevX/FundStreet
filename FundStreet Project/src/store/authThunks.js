import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
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


const sendOtp = createAsyncThunk(
    "auth/sendOtp", async (phoneNumber,{rejectWithValue}) =>{
        try {
            const response = await axios.post("  ",{phoneNumber})
            return response.data                    // get this checked that is this returned data type is fine ? 
        } catch (error) {
            rejectWithValue(error.response.value)
        }
    }
)
const verifyOtp = createAsyncThunk(
    "auth/verifyOtp", async({phoneNumber,otp} , {rejectWithValue}) =>{
        try {
            const response = await axios.post(" /api/v1/verifyOtp", {phoneNumber,otp} )
            const {status , message , data} =  response.data
            sessionStorage.setItem( "authToken" , data.token)        // requires key and value
            return {user : data.credentials , token : data.token , message, status}
        } catch (error) {
            rejectWithValue(error.response?.data?.message || 'Error Verifying the OTP' )
        }
    }
)

// next thunk for logInWithPassword
const logInWithPassword = createAsyncThunk(
    "auth/logInWithPassword", async({phoneNumber,password},{rejectWithValue})=>{
        try {
            const response = await axios.post(" " , {phoneNumber,password})
            const {status, message, data} = response.data
            sessionStorage.setItem("token",data.token)

            return {user : data.credentials , token : data.token , message , status}
        } catch (error) {
            rejectWithValue(error.response?.data?.message || 'Login Failed' )
        }
    }
)

 // thunk for signUp
// const signUp = createAsyncThunk(
//     "auth/signUp" , async({})
// )





export default {sendOtp,verifyOtp,logInWithPassword}