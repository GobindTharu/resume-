import SearchBar from "../sub/searchBar";
import NavbarIcons from "../sub/ThemeIcon";
import React from "react"
const SearchComponent = () => {
  return (
    <div className="flex items-center space-x-4  dark:bg-gray-900 shadow-sm">
      <SearchBar />
      <NavbarIcons />
    </div>
  );
};

export default SearchComponent;
