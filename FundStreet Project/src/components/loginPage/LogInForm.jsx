import  { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

import {verifyOtp} from '../../features/authThunks'
import {sendOtp} from '../../features/authThunks'
import {logInWithPassword} from '../../features/authThunks'


import OTPInput from "./OTPInput";
import PasswordInput from "./PasswordInput";
import MethodToggleButton from "./MethodToggleButton";
import PasswordOtpForm from "./PasswordOtpForm";


function LogInForm() {
const [mobile_no, setMobile_no] = useState("+91");
const [otp,setOtp]  = useState(Array(6).fill(''))      // reqd array in OTPInput.jsx   - now here convert to string
const [password,setPassword] = useState('')
const [isLogInWithPassword, setIsLogInWithPassword] = useState(false); 
const[showPasswordOtpForm,setShowPasswordOtpForm] = useState(false) 

  
  const dispatch = useDispatch();
  const navigate = useNavigate()
 

  const handleSendOtp = async() =>{
    console.log("send Otp API call triggered ");        //check
    
    try{
        await dispatch(sendOtp(mobile_no)).unwrap()
        console.log('send Otp success');          // check
        
         toast('OTP is sent Successfully !! ',{type : 'success',autoClose : 2000 })
    }
    catch(error){
        console.log('send Otp error:',error);
        
        toast(error.message, {type : 'error',autoClose : 2000} )
        
    }
    
  }

  const handleVerifyOtp = async() => {
      console.log('verify otp API call sent');
      console.log('under verify Otp ',mobile_no);
    if (otp.includes('')) {
        toast("Please enter the full OTP", { type: "warning", autoClose: 2000 });
        return
    }
   try{ 
        const otpString = otp.join('')      // because the "otp" was in array 
        await dispatch(verifyOtp({mobile_no,  otpString })).unwrap()
        navigate('/')
        toast('Login Successful !!',{type : 'success',autoClose : 2000})
}
    catch (error){
        toast(error.message, {type : 'error',autoClose : 2000})
    }
  };

const handleLogInWithPassword = async()=>{
    console.log('logIn with password API call sent ');
    
    try {
        console.log(mobile_no,password)
        await dispatch(logInWithPassword({mobile_no,password })).unwrap()
        console.log("password hit");
        
        // await dispatch(sendOtp({mobile_no})).unwrap()       // otp jayega ek after password
        setShowPasswordOtpForm(true)
        // toast('Login Successful !!',{type : 'success',autoClose : 2000})
    } catch (error) {
        toast(error.message, {type : 'error',autoClose : 2000})
    }
    
}

  return (
    
    <div className="flex justify-center">
        {showPasswordOtpForm ?
            ( <PasswordOtpForm handleVerifyOtp={handleVerifyOtp} otp={otp} setOtp={setOtp} /> )
            :
            (
            <>

    
      <form className="w-full max-h-full max-w-[100%] sm:max-w-[50%] h-[60%] border-solid border-[10px] p-8 border-green-600 rounded-[32px] shadow-2xl shadow-slate-500 mt-14  "
        onSubmit={(e) => e.preventDefault()}>
      <header className="flex flex-col">
        <h2  className="flex flex-wrap font-semibold font-sans text-lg sm:text-xl md:text-3xl justify-center gap-[4px]" >Welcome to 
            <span className="text-green-600 text-xl sm:text-xl md:text-4xl " > FUNDSTREET </span> </h2> 
        <h3 className="flex justify-center text-green-600 text-xl sm:text-xl md:text-4xl mt-8" 
            > Login / Signup </h3>
      </header>
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 " >
                <div className="flex mt-8 sm:mt-16 justify-center " >
                    <label htmlFor="mobile_no">Phone </label>
                
                    <input
                        type="tel"
                        value={mobile_no}
                        pattern="[0-9]{10}"
                        required
                        onChange={(e) => setMobile_no(e.target.value)}
                        placeholder="Enter Phone Number"
                        className="border-solid border-[2px] rounded-lg ml-2  "
                    />

                </div>
                <div className="flex justify-center" >
                    { isLogInWithPassword ? <PasswordInput onValidPassword = {setPassword}  /> : <OTPInput 
                        length={6} 
                        otp = {otp} 
                        setOtp = {setOtp} 
                    />}
                </div>  
            </div>     

          <div className="flex justify-between gap-4 mt-8 ">
            { !isLogInWithPassword ? 
                <button onClick={handleSendOtp} type="button" className=" underline underline-offset-2 " >Request Otp</button>
                 : 
                <button type="button" className=" underline underline-offset-2" > Forget Password ? </button> 
            }

            <MethodToggleButton 
                    isLogInWithPassword = {isLogInWithPassword} 
                    setIsLogInWithPassword = {setIsLogInWithPassword} 
            />
          </div>

            <div className="flex justify-center" >
          <button 
                type="submit" 
                onClick ={ isLogInWithPassword ? handleLogInWithPassword : handleVerifyOtp} 
                className="w-[50%] max:w-[250px] h-[40px] bg-green-600 text-white rounded-md mt-4 "
            >
                Log in
          </button>
          </div>
        </div>
      </form>
      <ToastContainer/>
      </> 
    ) }
    </div>
    
  );
}

export default LogInForm;
