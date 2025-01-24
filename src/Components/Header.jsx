import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IMAGES } from "../Utils/images";
import { RiArrowDropDownFill, RiMenuLine, RiCloseLine } from "@remixicon/react";
import SearchBar from "./Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const Header = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top Navigation */}
      <nav
        className="md:px-4 px-2 md:py-1 py-2 flex items-center bg-secondaryColor 
      justify-between"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img
              src={IMAGES.NAVLOGO}
              alt="Logo"
              className="w-[50px] lg:w-[70px] md:w-[60px] sm:w-[50px]"
            />
          </NavLink>
        </div>

        {/* Delivery Info (Visible on larger screens) */}
        <div className="md:flex hidden items-end justify-center gap-1">
          <img
            className="w-[16px] object-contain"
            src={IMAGES.LOCATE}
            alt="Location"
          />
          <div>
            <p className="text14 text-borderColor">
              Delivering to Louisville 40223
            </p>
            <p className="text12 text-whiteColor font-semibold cursor-pointer">
              Update location
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className=" md:w-[46%] sm:w-[62] w-[72%] pl-2 ">
          <SearchBar />
        </div>

        <label className="md:inline-flex hidden items-center cursor-pointer bg-white rounded-full">
          {/* Hidden checkbox */}
          <input
            type="checkbox"
            className="sr-only peer"
            checked={theme === "dark"} // Bind checked state to Redux theme value
            onChange={() => dispatch(toggleTheme())} // Dispatch the action to toggle the theme
          />

          {/* Switch container */}
          <div
            className="relative w-11 h-6 bg-gray-200 peer:bg-white peer-focus:bg-white
            dark:peer-focus:ring-blue-800 rounded-full dark:bg-white peer-checked:after:translate-x-full
            after:absolute after:top-[2px] after:start-[2px] after:bg-black after:border-gray-300 after:border
            after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
            peer-checked:bg-white"
          ></div>
        </label>

        <div className="relative group md:block hidden">
          <button className="flex items-center px-4 py-2 text-whiteColor">
            <div>
              <p className="text12 ">Hello, sign in</p>
              <p className="text11 font-semibold">User Name</p>
            </div>
          </button>
        </div>

        {/* Cart */}
        <Link className="md:flex hidden items-center" to="/cart">
          <div className="relative ">
            <p className="text12 absolute lg:left-5 md:left-4 sm:left-4 left-3 -top-1 text-whiteColor">
              0
            </p>
            <img
              className="flex w-[30px] lg:w-[40px] md:w-[30px] sm:w-[20px] object-contain"
              src={IMAGES.CARTICON}
              alt="Cart Icon"
            />
          </div>
          <p className="hidden lg:block ml-2 text-whiteColor">Cart</p>
        </Link>
        {/* Cart */}

        {/* Mobile Menu Toggle */}
        <div className="max-md:block hidden text-white">
          <div className="flex items-center gap-2 ">
            <Link to="/cart">
              <div className="relative md:block hidden">
                <p className="text12 absolute lg:left-[20px] md:left-[16px] sm:left-[12px] left-[12px] -top-[4px]">
                  0
                </p>
                <img
                  className="flex w-[24px] lg:w-[40px] md:w-[35px] sm:w-[30px] object-contain"
                  src={IMAGES.CARTICON}
                  alt="Cart Icon"
                />
              </div>
            </Link>
            <div className="cursor-pointer" onClick={toggleMenu}>
              <RiMenuLine />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-around max-md:hidden bg-gray">
        <nav
          className="flex items-center justify-center gap-14 max-xl:gap-8 py-2 w-[80%] 
    top-0 text-white"
        >
          <Link className="text12" to="/">
            HOME
          </Link>
          <div className="group relative">
            <h1 className="text12 cursor-pointer">SERVICES</h1>
            <div
              className="absolute -left-8 w-[34rem] opacity-0 pointer-events-none group-hover:opacity-100 
              group-hover:pointer-events-auto bg-gray border border-gray-200 rounded-md shadow-lg p-4 z-10 transition-opacity duration-300"
            >
              <div className="text10 grid grid-cols-1 sm:grid-cols-3 items-start justify-between gap-10 ">
                <div className="py-2 flex flex-col border-r-[1px] gap-y-4">
                  <Link className="cursor-pointer" to="service/skin-care">
                    Skincare
                  </Link>
                  <Link className="cursor-pointer" to="service/hair-care">
                    Haircare
                  </Link>

                  <h1 className="cursor-pointer">Nailcare</h1>
                  <h1 className="cursor-pointer">Massage</h1>
                  <h1 className="cursor-pointer">Permanent Makeup</h1>
                  <h1 className="cursor-pointer">Professional Makeup</h1>
                </div>
                <div className="py-2 flex flex-col gap-y-4">
                  <h1 className="cursor-pointer">All</h1>
                  <h1 className="cursor-pointer">Peel Off Mask</h1>
                  <h1 className="cursor-pointer">LED Mask Therapy</h1>
                  <h1 className="cursor-pointer">Peeling</h1>
                  <h1 className="cursor-pointer">Body Massage</h1>
                  <h1 className="cursor-pointer">Korean facial</h1>
                </div>
                <div className="py-2 flex flex-col gap-y-4">
                  <h1 className="cursor-pointer">Waxing</h1>
                  <h1 className="cursor-pointer">Facial</h1>
                  <h1 className="cursor-pointer">Bleach</h1>
                  <h1 className="cursor-pointer">Cleansup</h1>
                </div>
              </div>
            </div>
          </div>
          <Link className="text12" to="/about">
            ABOUT US
          </Link>
          <Link className="text12" to="/contact-us">
            CONTACT US
          </Link>
          <Link className="text12" to="/giftcard">
            GIFTCARD
          </Link>
          <Link className="text12" to="/membership">
            MEMBERSHIP
          </Link>
          <Link className="text12" to="/service/favorite">
            FAVORITES
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="flex  flex-col items-center md:hidden text-white fixed top-0 left-0 
          bg-secondaryColor w-full h-screen z-50 gap-4"
        >
          <div className="w-full items-center">
            <div className="w-full  flex items-center justify-between place-items-end p-3">
              <div className="text-center">
                <p className="text9 ">Hello, sign in</p>
                <p className="text8 font-semibold">User Name</p>
              </div>
              <RiCloseLine className=" object-contain" onClick={toggleMenu} />
            </div>
            <div className="w-full p-3 flex items-center justify-between">
              {/* location  */}
              <div className="flex items-end justify-center gap-1">
                <img
                  className="w-[16px] object-contain"
                  src={IMAGES.LOCATE}
                  alt="Location"
                />
                <div>
                  <p className="text12 text-borderColor">
                    Delivering to Louisville 40223
                  </p>
                  <p className="text11 text-whiteColor font-semibold cursor-pointer">
                    Update location
                  </p>
                </div>
              </div>
              {/* location  */}
              {/* Cart and Username */}
              <div className="flex gap-2 items-center justify-center text-whiteColor">
                <label className="items-center cursor-pointer bg-white rounded-full">
                  {/* Hidden checkbox */}
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={theme === "dark"} // Bind checked state to Redux theme value
                    onChange={() => dispatch(toggleTheme())} // Dispatch the action to toggle the theme
                  />

                  {/* Switch container */}
                  <div
                    className="relative w-11 h-6 bg-gray-200 peer:bg-white peer-focus:bg-white
          dark:peer-focus:ring-blue-800 rounded-full dark:bg-white peer-checked:after:translate-x-full
          after:absolute after:top-[2px] after:start-[2px] after:bg-black after:border-gray-300 after:border
          after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
          peer-checked:bg-white"
                  ></div>
                </label>
                <Link to="/cart" onClick={toggleMenu}>
                  <div className="relative">
                    <p className="text12 absolute left-3 -top-1 md:left-4 sm:left-4">
                      0
                    </p>
                    <img
                      className="flex w-[24px] lg:w-[40px] md:w-[35px] sm:w-[30px] object-contain"
                      src={IMAGES.CARTICON}
                      alt="Cart Icon"
                    />
                  </div>
                </Link>
              </div>
              {/* Cart and Username */}
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            {/* Navigation Links */}
            <div className="flex text5 items-center justify-center gap-4 flex-col">
              <Link to="/" onClick={closeMenu}>
                HOME
              </Link>
              <div className="flex items-center justify-center">
                <Link to="/services" onClick={closeMenu}>
                  SERVICES
                </Link>
                <RiArrowDropDownFill />
              </div>
              <Link to="/about" onClick={closeMenu}>
                ABOUT US
              </Link>
              <Link to="/contact-us" onClick={closeMenu}>
                CONTACT US
              </Link>
              <Link to="/giftcard" onClick={closeMenu}>
                GIFTCARD
              </Link>
              <Link to="/membership" onClick={closeMenu}>
                MEMBERSHIP
              </Link>
              <Link to="/favorites" onClick={closeMenu}>
                FAVORITES
              </Link>
            </div>
            {/* Navigation Links */}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
