import OTPInput from "./OTPInput"

function LogInForm() {
    const handleComplete =(otp)=>{
        console.log('Entered OTP :', otp);
        
    }
  return (
    <div>
        <header>
            <h2>Welcome to FUNDSTREET</h2>
            <h3> logIn</h3>
        </header>
            <form action="submit">
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="Enter Phone" />
                    <OTPInput length={6} onComplete={handleComplete}/>
                </div>
            </form>
    </div>
  )
}

export default LogInForm