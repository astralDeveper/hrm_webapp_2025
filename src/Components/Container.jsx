import React, { useState } from "react";
import SideNav from "./SideNav";
import { useNavigate } from "react-router-dom";

const Container = ({ mainStyle, children }) => {
  const navigate = useNavigate();
  const [toggleBar, setToggleBar] = useState(false);

  const changeToggle = () => {
    setToggleBar(!toggleBar);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-nowrap w-full h-full">
      <SideNav toggleBar={toggleBar} toggle={changeToggle} />
      <div
        className={`${
          toggleBar ? "w-full lg:w-[94%]" : "w-full lg:w-[88%]"
        } transition-all duration-500 h-full`}
      >
        <header className="p-2 sm:p-5 flex justify-between items-center border-black border-b-[1px]">
          <div className="flex items-center gap-4">
            <div
              onClick={changeToggle}
              className="bg-[#FFFFFF] p-2 shadow-sm rounded-[10px] md:px-4 cursor-pointer"
            ></div>
          </div>
          <div className="flex items-center gap-8">
            <div
              onClick={() => {}}
              className="flex items-center justify-center gap-2 cursor-pointer"
            ></div>
            <di
              onClick={handleLogout}
              className="flex items-center gap-2 cursor-pointer"
            >
              <p className="text-black text-[18px] font-light ">LL</p>
              <p className="text-black text-[18px] font-light  md:block hidden">
                Log out
              </p>
            </di>
          </div>
        </header>

        <div className={`${mainStyle}`}>{children}</div>
      </div>
    </div>
  );
};

export default Container;
