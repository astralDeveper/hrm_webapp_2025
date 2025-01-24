import React from "react";
import { IMAGES } from "../utils/Images";

const AuthHeader = () => {
  return (
    <div
      className={`w-[50%] hidden md:flex flex-col justify-center items-center fixed h-full`}
    >
      <div className="w-full h-screen bg-splashBg bg-no-repeat bg-cover  md:flex flex-col justify-center items-center ">
        <img src={IMAGES.LOGO} className="w-[192px] h-[246px] " alt="6666" />
        <p className=" lg:text-[60px] md:text-[30px] font-bold text-center webName !bg-red-500">
          SAMPTRACK
        </p>
        <p className="lg:text-[30px] md:text-[31px] font-medium text-center  text-white  ">
          TRACK, TACKLE, TRIUMPH
        </p>
      </div>
    </div>
  );
};

export default AuthHeader;
