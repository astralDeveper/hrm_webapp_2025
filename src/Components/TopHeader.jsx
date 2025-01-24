import React from "react";
import { IMAGES } from "../utils/Images";

const TopHeader = ({ name }) => {
  return (
    <main className="bg-secondaryColor md:py-10  py-3">
      <div className="flex justify-center relative md:my-8 my-2">
        <p className="text-white font-bold preheading  absolute lg:-top-6 -top-3">
          {name}
        </p>
      </div>
      <img src={IMAGES.DESIGN} className="w-full md:h-[100px] h-[50px]" />
      <div className="w-full h-full"></div>
    </main>
  );
};

export default TopHeader;
