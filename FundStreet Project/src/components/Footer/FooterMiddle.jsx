import { Link } from "react-router-dom";

function FooterMiddle() {
  return (
    <div className="flex flex-row justify-center gap-4 lg:gap-8 font-serif text-[14px] lg:text-[16px] text-white">
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/Mutual-Funds">
        Mutual Funds
      </Link>
    </div>
  );
}

export default FooterMiddle;