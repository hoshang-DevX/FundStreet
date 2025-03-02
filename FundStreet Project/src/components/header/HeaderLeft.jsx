import { Link } from "react-router-dom";

function HeaderLeft() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/HomePageLogo.svg"
        alt="FundStreet Logo"
        className="w-24 h-10 object-contain"
      />
    </Link>
  );
}

export default HeaderLeft;