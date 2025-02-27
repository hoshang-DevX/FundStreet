import { createSlice } from "@reduxjs/toolkit";
import { sendOtp , verifyOtp , logInWithPassword}  from './authThunks'


// A function that accepts an initial state, an object full of reducer functions, and a "slice name", 
// and automatically generates action creators and action types that correspond to the reducers and state.

const initialState = {
    isAuthenticated : false,
    userToken : null,
    userInfo : null,
    loading : false,
    error : null, 
    // logInMethod : 'OTP',
    otpSent : false,
    otpVerified : false
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
    
        logOut(state){
            state.userInfo = null,
            state.userToken = null,
            state.otpSent = false,
            state.otpVerified = false,
            state.isAuthenticated = false
        }
    },

    extraReducers:(builder) => {
        builder
                // for sending the OTP
        .addCase(sendOtp.pending,(state) =>{
            state.loading = true,
            state.error = null
        })
        .addCase(sendOtp.fulfilled,(state) =>{
            state.otpSent = true,
            state.loading = false
        })
        .addCase(sendOtp.rejected , (state,action) => {
            state.error = action.payload,
            state.loading = false
        })

        // for verifying the OTP
        .addCase(verifyOtp.pending , (state) =>{
            state.loading = true,
            state.error = null // to clear any previous error states
        })
        .addCase(verifyOtp.fulfilled , (state,action) =>{
            state.loading = false,
            state.isAuthenticated = true,
            state.otpVerified = true,
            state.userToken = action.payload.token,
            state.userInfo = action.payload.user 
        })
        .addCase(verifyOtp.rejected , (state,action) =>{
            state.loading = false,
            state.error = action.payload
        })

        // for logingIn with Password
        .addCase(logInWithPassword.pending , (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(logInWithPassword.fulfilled , (state,action) => {
            state.loading = false,
            state.isAuthenticated = true,
            state.userToken = action.payload.token,
            state.userInfo = action.payload.user
        })
        .addCase(logInWithPassword.rejected , (state,action) => {
            state.loading = false,
            state.error = action.payload
        })

        // for signing Up a new user
        // .addCase(signUp.pending , (state) =>{
        //     state.error = null,
        //     state.loading = true
        // })
        // .addCase(signUp.fulfilled , (state,action) =>{
        //     state.loading = false,
        //     state.userInfo = action.payload.user,
        //     state.isAuthenticated = true,
        //     state.userToken = action.payload.token
        // })
        // .addCase(signUp.rejected , (state,action) =>{
        //     state.loading = false,
        //     state.error = action.payload
        // })
        

    }
})
export default authSlice
