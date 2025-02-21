import React from "react";
import { IMAGES } from "../../../utils/Images";

const ProfileImage = () => {
  return (
    <div className="bg-white w-full h-auto rounded-md p-4">
      <div className="relative flex justify-center">
        <img
          src={IMAGES.PLACEHOLDER}
          className="md:w-[200px] md:h-[200px] w-[150px] h-[120px]"
        />
        <div className="cursor-pointer">
          <img
            src={IMAGES.SELECTIMAGE}
            className="absolute bottom-2 right-12  w-[40px] h-[40px]"
          />
        </div>
      </div>
      <div className="flex flex-col text-center gap-2 my-2">
        <span className="text-secondaryColor authsubhead">
          Muhammad Mehroze Khan
        </span>
        <span className="text-gray1 authdesc">UI UX Designer</span>
      </div>
    </div>
  );
};

export default ProfileImage;
