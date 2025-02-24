// import SearchLogo from '..'
function SearchBar() {
  return (
    <div className="flex flex-row relative border-10 px-0  " >
        <input placeholder="Search"  className=" w-full border-solid border-2  border-green-600 pl-10 pr-6 rounded-xl focus:outline-none " />
        <img src="/Search.svg" alt="Search" className="w-[14px] h-[14px] absolute left-5 top-1.5 " />
    </div>
  )
}

export default SearchBar