import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Header from "./components/header/Header"
import LogInForm from "./components/loginPage/logInForm"

function App() {
  return (
   
   <Router>
   <Header/>
      <Routes>
         <Route path="/" element = {<Home/>}  />  
         <Route path="/about" element = {<About/>} />
         <Route path = "/login" element = {<LogInForm/>} />
      </Routes>
   </Router>

   
  )
}

export default App