import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function HeaderRight() {
  return (
    <>
      <div className="bg-white flex flex-row justify-end gap-4 lg:gap-8 font-serif text-[14px] lg:text-[16.75px] ">
        <div>
          <Link
            to="/"
            className="font-bold text-green-600 hidden lg:block md:block  "
          >
            {" "}
            Home{" "}
          </Link>
        </div>
        <div>
          <Link to="/about" className="font-bold text-green-600">
            {" "}
            About{" "}
          </Link>
        </div>
        <div>
          <Link to="/about" className="font-bold text-green-600">
            {" "}
            Mutual Funds{" "}
          </Link>
        </div>
        <div>
          <Link to="/about" className="font-bold text-green-600">
            {" "}
            logIn / SignUp{" "}
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default HeaderRight;