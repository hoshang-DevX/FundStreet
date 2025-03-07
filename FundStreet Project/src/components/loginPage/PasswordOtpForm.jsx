import OTPInput from "./OTPInput"

import PropTypes from 'prop-types'
export default function PasswordOtpForm({handleVerifyOtp ,otp,setOtp}){

    return(
        <div className="flex justify-center" >
        <div className="w-full max-h-full max-w-[100%] md:max-w-[80%] h-[70%] border-solid border-[2px] border-green-600 bg-white rounded-[32px] shadow-2xl shadow-slate-500 mt-40  " >
        <div className="gap-10 m-8 ">
            <h2 className="flex flex-wrap font-semibold font-sans text-lg sm:text-xl md:text-3xl justify-center gap-[4px] "
                 >Welcome to   <span className="text-green-600 text-xl sm:text-xl md:text-4xl " > FUNDSTREET</span></h2>
            <h2 className="flex flex-wrap justify-center font-medium text-slate-600 text-xs sm:text-md md:text-lg mt-[40px] " >The OTP has been sent to the Registered Number. Please Fill below to Login.</h2>
            <div className="flex flex-col items-center gap-4 mt-8" >
            <OTPInput
                    length={6} 
                    otp = {otp} 
                    setOtp = {setOtp}  
            />
            
            <button className="w-[150px] h-[40px] bg-green-600 text-white rounded-md "
                type="submit" 
                onClick ={handleVerifyOtp} 
            > 
                Log in
          </button>
          </div>
        </div>
        </div>
        </div>
    )
}

PasswordOtpForm.propTypes = {
    handleVerifyOtp : PropTypes.func,
    otp : PropTypes.arrayOf(PropTypes.string).isRequired,
    setOtp : PropTypes.func.isRequired
}