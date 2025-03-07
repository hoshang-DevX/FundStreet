import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import MutualFunds from "./pages/MutualFunds"
import CategoryFunds from "./components/mutualFunds/CategoryFunds"
import { LogInForm } from "./components/loginPage/logInForm";

// import TopMovingBanner from "./components/MovingBanner/TopMovingBanner";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">

        {/* <TopMovingBanner/> */}

        <Header />
        <main className="flex-grow pt-24 px-6 bg-gradient-to-b from-[#FFFFFF] via-[#CFF5E7] to-[#FEFFFF]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mutual-funds" element={<MutualFunds />} />
            <Route path="/mutual-funds/:category" element={<CategoryFunds />} />
            <Route path="/login" element={<LogInForm/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;