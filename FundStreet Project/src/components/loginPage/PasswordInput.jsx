import { useState } from "react"
import PropTypes from 'prop-types'

function PasswordInput({onValidPassword}) {
const [password,setPassword] = useState("");    // seedha passowrd ko password mai daalne ke bajaye ek func ke through  daalenge jo validation bhi check krlega
const [error,setError] = useState("")

const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const validatePassword = (value)=> {
    if(!passwordRegex.test(value)){
        setError("Password must have Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
        return false
    }
    else{
        setError("")
        return true
    }
}

const handleChange=(e)=>{
    const value = e.target.value        // first validate this 
    setPassword(value)    
    const isValid = validatePassword(value)
    onValidPassword(isValid ? value : null )    // send it to parent comp
}

  return (
    <div>
        <div className="flex justify-center" >
                <label htmlFor="Password" >Password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    value={password}
                    className="border-solid border-[2px] border-green-700 w-[200px] h-[30px] rounded-md ml-2  "
                />
          </div>
                { error && <p className="text-red-600 text-[10px] " > {error} </p>}  

    </div>
  )
}

export default PasswordInput

PasswordInput.propTypes = {
    onValidPassword : PropTypes.func.isRequired
}