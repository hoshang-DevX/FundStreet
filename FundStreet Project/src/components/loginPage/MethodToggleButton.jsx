import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PropTypes from 'prop-types'

export default function MethodToggleButton({isLogInWithPassword , setIsLogInWithPassword}) {

  const handleChange = (event, newValue) => {
    setIsLogInWithPassword(newValue === "password"); 
  };


  return (
    <ToggleButtonGroup
      color="primary"
      value={isLogInWithPassword ? "password" : "otp"}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      // sx={{ maxWidth : 200 , minWidth : 100}}
    
    >
     
      <ToggleButton 
          value="otp"
          sx={{ 
            bgcolor : !isLogInWithPassword ? "green" : "transparent",
            color : !isLogInWithPassword ? "white" : "black",
            "&.Mui-selected": { bgcolor: "#43a047", color: "white" },
            "&.Mui-selected:hover": { bgcolor: "green", color: "black" } 
          }}
          >OTP</ToggleButton>
      <ToggleButton 
            value="password"
            sx={{ 
              bgcolor : isLogInWithPassword ? "green" : "transparent",
              color : isLogInWithPassword ? "white" : "black",
              "&.Mui-selected": {  bgcolor: "#43a047", color: "white"},   // bg-green-600 = "#43a047"
              "&.Mui-selected:hover": { bgcolor: "green", color: "black" }  
            }}
            
            >PASSWORD</ToggleButton> 
    </ToggleButtonGroup>
  );
}
// defining the prop types to remove warinings 
MethodToggleButton.propTypes = {
  isLogInWithPassword: PropTypes.bool.isRequired,  // Must be a boolean
  setIsLogInWithPassword: PropTypes.func.isRequired // Must be a function
};