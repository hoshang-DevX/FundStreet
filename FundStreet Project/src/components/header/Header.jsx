import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";
import SearchBar from "./SearchBar";
function Header() {
  return (
    <div className="w-full bg-slate-50 ">
      <header className=" flex-row grid grid-cols-5 sm:grid-cols-3 px-7 lg:px-16 mx-auto min-h-[150px] items-center ">
        <div className=" flex col-span-1 justify-start " >
          <HeaderLeft />
        </div>
        <div className=" col-span-2 justify-center sm:col-span-1 " >
          <SearchBar />
        </div>
        <div className=" flex col-span-2 justify-end sm:col-span-1" >
          <HeaderRight />
        </div>
      </header>
    </div>
  );
}

export default Header;
