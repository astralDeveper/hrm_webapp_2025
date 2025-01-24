import React from "react";

const SearchBar = () => {
  return (
    <form className="w-[100%] mx-auto">
      <div className="flex">
        {/* Dropdown button */}
        <button
          id="dropdown-button"
          className="text10 flex-shrink-0 z-10 inline-flex items-center py-2 md:px-4 px-2 text-sm font-medium 
          text-center text-deepColor bg-percentColor border border-deepColor rounded-s-lg 
          focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          All
          <svg
            className="text11 w-2 h-2 object-contain ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Search input */}
        <input
          type="search"
          id="search-dropdown"
          className="text12 px-2 md:py-3 sm:py-2 py-1 w-full text-sm text-gray-900 text-secondaryColor bg-white rounded-none border-t border-b border-gray-300  focus:outline-none"
          placeholder="Search what you want"
          required
        />

        {/* Search button */}
        <button
          type="submit"
          className="flex-shrink-0 md:px-4 px-3 font-medium text-whiteColor bg-gray rounded-e-lg hover:bg-gray-700 focus:outline-none focus:ring-gray-500"
        >
          <svg
            className="w-2.5 lg:w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="yellow"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
