// import SearchLogo from '..'
function SearchBar() {
  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="w-full border border-green-600 rounded-xl py-2 pl-10 pr-4 focus:outline-none"
      />
      <img
        src="/Search.svg"
        alt="Search Icon"
        className="w-5 h-5 absolute left-3 top-2.5"
      />
    </div>
  );
}

export default SearchBar;