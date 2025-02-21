import React from "react";
import { Link, useLocation } from "react-router-dom";
import HI from "../../public/images/hi.gif";

const SideNav = ({ toggleBar, toggle }) => {
  const Data = [
    { 
      href: "/",
      name: "Create Test",
      img: (
        <g
          id="editing_2_"
          data-name="editing (2)"
          transform="translate(0 -0.001)"
        >
          <path
            id="Path_185"
            data-name="Path 185"
            d="M20.266,88.821a.733.733,0,0,0-.733.733V100.3a1.222,1.222,0,0,1-1.221,1.221H2.686A1.222,1.222,0,0,1,1.465,100.3V84.67a1.222,1.222,0,0,1,1.221-1.221H13.429a.733.733,0,0,0,0-1.465H2.686A2.689,2.689,0,0,0,0,84.67V100.3a2.689,2.689,0,0,0,2.686,2.686H18.313A2.689,2.689,0,0,0,21,100.3V89.553A.733.733,0,0,0,20.266,88.821Z"
            transform="translate(0 -77.98)"
            fill="#000000"
          />
          <path
            id="Path_186"
            data-name="Path 186"
            d="M194.91,1.882,193.529.5a1.711,1.711,0,0,0-2.417,0l-11.05,11.05a.733.733,0,0,0-.2.374l-.691,3.453a.733.733,0,0,0,.862.862l3.453-.691a.733.733,0,0,0,.374-.2L194.91,4.3h0a1.711,1.711,0,0,0,0-2.417ZM182.981,14.156l-2.158.432.432-2.158,8.994-8.994,1.727,1.727ZM193.874,3.263l-.863.863L191.285,2.4l.863-.863a.244.244,0,0,1,.345,0l1.381,1.381A.244.244,0,0,1,193.874,3.263Z"
            transform="translate(-170.408)"
            fill="#000000"
          />
        </g>
      ),
    },
    {
      href: "/form-submission",
      name: "Form submission",
      img: (
        <path
          id="approval"
          d="M10.919,24.987A1.016,1.016,0,0,1,9.9,26H4.063A4.067,4.067,0,0,1,0,21.94V4.063A4.067,4.067,0,0,1,4.063,0H16.551a4.068,4.068,0,0,1,4.063,4.063V14.83a1.016,1.016,0,1,1-2.031,0V4.063a2.034,2.034,0,0,0-2.031-2.031H4.063A2.034,2.034,0,0,0,2.031,4.063V21.94a2.034,2.034,0,0,0,2.031,2.031H9.9A1.016,1.016,0,0,1,10.919,24.987Zm11.967-8.444a1.016,1.016,0,0,0-1.417.234l-5.007,6.993a.58.58,0,0,1-.835.043L12.386,20.7a1.016,1.016,0,0,0-1.407,1.465l3.244,3.115a2.62,2.62,0,0,0,1.8.72q.086,0,.172-.006a2.618,2.618,0,0,0,1.862-.97l.034-.045,5.027-7.022a1.015,1.015,0,0,0-.235-1.417ZM15.535,6.094H5.073a1.016,1.016,0,0,0,0,2.031H15.535a1.016,1.016,0,0,0,0-2.031Zm1.016,5.079a1.016,1.016,0,0,0-1.016-1.016H5.073a1.016,1.016,0,1,0,0,2.031H15.535A1.016,1.016,0,0,0,16.551,11.173ZM5.073,14.22a1.016,1.016,0,1,0,0,2.031h6.354a1.016,1.016,0,1,0,0-2.031Zm0,0"
          fill="#000000"
        />
      ),
    },
    {
      href: "/attendance-report",
      name: "Attendance Report",
      img: (
        <path
          id="approval"
          d="M10.919,24.987A1.016,1.016,0,0,1,9.9,26H4.063A4.067,4.067,0,0,1,0,21.94V4.063A4.067,4.067,0,0,1,4.063,0H16.551a4.068,4.068,0,0,1,4.063,4.063V14.83a1.016,1.016,0,1,1-2.031,0V4.063a2.034,2.034,0,0,0-2.031-2.031H4.063A2.034,2.034,0,0,0,2.031,4.063V21.94a2.034,2.034,0,0,0,2.031,2.031H9.9A1.016,1.016,0,0,1,10.919,24.987Zm11.967-8.444a1.016,1.016,0,0,0-1.417.234l-5.007,6.993a.58.58,0,0,1-.835.043L12.386,20.7a1.016,1.016,0,0,0-1.407,1.465l3.244,3.115a2.62,2.62,0,0,0,1.8.72q.086,0,.172-.006a2.618,2.618,0,0,0,1.862-.97l.034-.045,5.027-7.022a1.015,1.015,0,0,0-.235-1.417ZM15.535,6.094H5.073a1.016,1.016,0,0,0,0,2.031H15.535a1.016,1.016,0,0,0,0-2.031Zm1.016,5.079a1.016,1.016,0,0,0-1.016-1.016H5.073a1.016,1.016,0,1,0,0,2.031H15.535A1.016,1.016,0,0,0,16.551,11.173ZM5.073,14.22a1.016,1.016,0,1,0,0,2.031h6.354a1.016,1.016,0,1,0,0-2.031Zm0,0"
          fill="#000000"
        />
      ),
    },
    {
      href: "/profile",
      name: "My Profile",
      img: (
        <path
          id="approval"
          d="M10.919,24.987A1.016,1.016,0,0,1,9.9,26H4.063A4.067,4.067,0,0,1,0,21.94V4.063A4.067,4.067,0,0,1,4.063,0H16.551a4.068,4.068,0,0,1,4.063,4.063V14.83a1.016,1.016,0,1,1-2.031,0V4.063a2.034,2.034,0,0,0-2.031-2.031H4.063A2.034,2.034,0,0,0,2.031,4.063V21.94a2.034,2.034,0,0,0,2.031,2.031H9.9A1.016,1.016,0,0,1,10.919,24.987Zm11.967-8.444a1.016,1.016,0,0,0-1.417.234l-5.007,6.993a.58.58,0,0,1-.835.043L12.386,20.7a1.016,1.016,0,0,0-1.407,1.465l3.244,3.115a2.62,2.62,0,0,0,1.8.72q.086,0,.172-.006a2.618,2.618,0,0,0,1.862-.97l.034-.045,5.027-7.022a1.015,1.015,0,0,0-.235-1.417ZM15.535,6.094H5.073a1.016,1.016,0,0,0,0,2.031H15.535a1.016,1.016,0,0,0,0-2.031Zm1.016,5.079a1.016,1.016,0,0,0-1.016-1.016H5.073a1.016,1.016,0,1,0,0,2.031H15.535A1.016,1.016,0,0,0,16.551,11.173ZM5.073,14.22a1.016,1.016,0,1,0,0,2.031h6.354a1.016,1.016,0,1,0,0-2.031Zm0,0"
          fill="#000000"
        />
      ),
    },
  ];

  const location = useLocation();

  return (
    <div
      className={` ${
        toggleBar
          ? "fixed lg:static w-[70%] h-screen z-10 lg:z-0 top-0  lg:block lg:w-[6%]"
          : "hidden lg:block lg:w-[15%]"
      }  bg-white h-screen w-full transition-all  duration-500 border-r-[1px] border-[#E5E5E5]`}
    >
      <ul className="">
        <li className="relative">
          <div
            onClick={toggle}
            className="size-5 lg:hidden absolute right-2 top-2 flex items-center justify-center"
          ></div>
          <Link
            to={"/"}
            className={`cursor-pointer  ${
              !toggle ? "bg-white p-2" : "p-2"
            }  overflow-hidden flex justify-center 
            items-center gap-3`}
          >
            <div
              className={` ${
                toggleBar ? "lg:hidden py-0" : "block py-3"
              } transition-all  w-full`}
            >
              <p className="lg:text-[18px] font-bold text-[#0024A4]">
                Code Dev.
              </p>
            </div>
          </Link>
        </li>

        <div className="">
          <img src={HI} alt="loading..." className="w-full h-[100px]" />
        </div>
        <div className="flex flex-col gap-3  ">
          <p className="text-center text-black">Jane Cooper</p>
          {Data.map((items, ind) => {
            const isActive = location.pathname === items.href;
            return (
              <li key={ind}>
                <Link
                  to={items.href}
                  className={`flex items-center justify-center gap-4 py-[10px] px-6 cursor-pointer text-white transition-all duration-1000`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.311"
                    height="26.002"
                    viewBox="0 0 23.311 26.002"
                  >
                    {items.img}
                  </svg>
                  <p
                    className={` ${toggleBar ? " lg:hidden" : "block"} ${
                      isActive && "font-bold"
                    } lg:text-[16px] md:text-[16px] text-[11px] w-[80%] text-start text-black transition-all duration-700`}
                  >
                    {items.name}
                  </p>
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
    // </div>
  );
};

export default SideNav;
