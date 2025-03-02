import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Fixed Header */}
        <Header />

        {/* Main content should grow to fill space */}
        <main className="flex-grow pt-24 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Sticky Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;