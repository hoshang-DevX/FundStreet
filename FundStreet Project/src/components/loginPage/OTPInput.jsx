import { useRef } from "react"
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export default function OTPInput({otp, setOtp, length }){

    const InputRef =useRef([])

    const handleChange = (e,index)=>{
        const value = e.target.value
        if (value.match(/[0-9]/)){
            const newDigits = [...otp]
            newDigits[index] = value
            
            setOtp(newDigits)

            // move to next field if available
            if(index < length-1  && InputRef.current[index+1]){
                InputRef.current[index+1].focus()
            }

             // if all the fields are filled hten send a collective OTP to API
            //  if(newDigits.join("").length === length){
            //     onComplete(newDigits.join(""))
            //  }
        }
    }
        // if backspace is clicked to delete a field , focus should move to the previous field
       const handleBackSpace= (e,index) => {
            if(e.key === "Backspace"){
                if(index > 0 && !otp[index]){
                   InputRef.current[index - 1].focus()
                }
                const newDigits = [...otp]
                newDigits[index] = ''
                setOtp(newDigits)
            }
        }

    

return(
    <div className=" flex gap-1" >
        { otp.map((digit , index) => (
        <input 
        key={index}
            type="digit"
            maxLength={1} 
            ref={(el)=>InputRef.current[index] = el}
            onChange={(e) => handleChange(e,index)}
            onKeyDown={(e) => handleBackSpace(e,index)}
            

            className="w-6 h-8 sm:w-6 sm:h-8 md:w-8 md:h-10 lg:w-10 lg:h-12 bg-slate-100 border-solid border-2 border-green-800 rounded-lg text-center  "
            // w-12  h-12
        />))
    }
    </div>
)
}

OTPInput.propTypes = {
    otp : PropTypes.arrayOf(PropTypes.string).isRequired,
    setOtp : PropTypes.func.isRequired
}