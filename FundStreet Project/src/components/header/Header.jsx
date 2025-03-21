
import { useSelector,useDispatch } from "react-redux";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderLeft from "./HeaderLeft";
import SearchBar from "./SearchBar";
import { logOut } from "../../features/authSlice";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated)
  console.log('isAuthecticated status', isLoggedIn)
  const dispatch = useDispatch()

  function handleLogOut (){
    dispatch(logOut())
  }

  useEffect(() => {
    // Function to close menu when clicking outside
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-btn")) {
        setMenuOpen(false);
      }
    };
    

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-[100] ">
      <div className="flex items-center justify-between px-6 lg:px-16 h-[80px]">
        {/* Left Logo */}
        <HeaderLeft />

        {/* Search Bar (Hidden on Mobile, Visible on Larger Screens) */}
        <div className="hidden md:block w-1/3">
          <SearchBar />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-green-600 font-semibold">
          <Link to="/" className="hover:text-green-800">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-800">
            About
          </Link>
          <Link to="/mutual-funds" className="hover:text-green-800">
            Mutual Funds
          </Link>

          { isLoggedIn ? 
            (<button onClick={handleLogOut} className="font-bold text-green-600 underline ">
                {" "}
                logout{" "}
            </button> )
          :
          ( <Link to="/login" className="font-bold text-green-600 underline ">
                {" "}
                  logIn / SignUp{" "}
            </Link> )
            }


        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl menu-btn "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu (Dropdown) */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md absolute w-full left-0 top-[80px] ">
          <ul className="flex flex-col items-center py-4 space-y-4 text-green-600 font-semibold">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/mutual-funds" onClick={() => setMenuOpen(false)}>
                Mutual Funds
              </Link>
            </li>
            <li>

            { isLoggedIn ? 
            (<button onClick={handleLogOut} className="font-bold text-green-600 underline ">
                {" "}
                logout{" "}
            </button> )
          :
          ( <Link to="/login" className="font-bold text-green-600 underline ">
                {" "}
                  logIn / SignUp{" "}
            </Link> )
            }

            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;