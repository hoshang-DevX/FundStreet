import { useRef, useState } from "react"

// eslint-disable-next-line react/prop-types
export default function OTPInput({length , onComplete }){

    // eslint-disable-next-line no-unused-vars
    const [otp,setOtp]  = useState(Array(length).fill(''))
    const InputRef =useRef([])

    const handleChange = (e,index)=>{
        const value = e.target.value
        if (value){
            const newDigits = [...otp]
            newDigits[index] = value
            setOtp(newDigits)

            // move to next field if available
            if(index < length - 1  && InputRef.current[index+1]){
                InputRef.current[index+1].focus()
            }

             // if all the fields are filled hten only useref to send a collective OTP to API
             if(newDigits.join("").length === length){
                onComplete(newDigits.join(""))
             }
        }
    }
        // if backspace is clicked to delete a field , focus should move to the previous field
       const handleBackSpace= (e,index) => { if(e.key === "Backspace" && index > 0 && !otp[index]){
           InputRef.current[index - 1].focus()
        }}

    

return(
    <div>
        { otp.map((digit , index) => (
        <input 
        key={index}
            type="text"
            maxLength={1} 
            onChange={handleChange}
            onKeyDown={handleBackSpace}
            // placeholder=

            className="w-12  h-12 bg-slate-100 border-solid border-2 border-green-800 rounded-lg text-center"

        />))
    }
    </div>
)
}