import { Link } from "react-router-dom"
function HeaderLeft() {
  return (
    <div>
        <Link to='/' >
        <img src="/HomePageLogo.svg" alt="FundStreet-Logo" className=" w-[100px] height-[100px] " /> 
        </Link>
    </div>
  )
}

export default HeaderLeft