// import React, { useState } from "react";
// import { IMAGES } from "../../utils/Images";
// import Button from "../../Components/Button";
// import AuthRightSide from "./Components/AuthRightSide";
// import { useNavigate } from "react-router-dom";
// import { Loginvalidationschema } from "../../Utils/schema";
// import { useFormik } from "formik";
// import Input from "./Input";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuth } from "../../redux/Slices/AuthSlice";
// import { showToast } from "./toast";

// import AuthForm from "../../Components/AuthForm";
// import { Loginvalidationschema } from "../../Utils/schema";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Loginvalidationschema,
//     onSubmit: (values) => {
//       showToast({ message: "Login Successfully", isError: false });
//       setTimeout(() => {
//         navigate("/");
//         dispatch(setAuth());
//       }, 1000);
//     },
//   });

//   return (
//     <div className="w-full grid md:grid-cols-2 grid-rows-1 bg-secondaryColor">
//       <div className="mainContainer flex  flex-col items-center  justify-center mx-auto    md:my-0 my-2 ">
//         <img
//           src={IMAGES.AUTH}
//           className="block md:hidden mx-auto h-[200px] w-full  "
//           alt="Logo"
//         />
//         <form onSubmit={formik.handleSubmit} className=" w-full">
//           <div>
//             <p className="authheading font-semibold text-start text-white">
//               Login
//             </p>
//             <p className="authsubhead font-medium text-start text-white">
//               {" "}
//               Welcome Back
//             </p>
//             <p className="authdesc text8 font-normal text-white">
//               {" "}
//               Please enter your Attendance credentials.
//             </p>

//             <Input
//               divstyle="md:mt-4 mt-2"
//               label="Email Address"
//               labelstyle="text-white text8"
//               innerDiv="border-[1px] border-borderColor rounded-md w-full text-white mt-2"
//               inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
//               type="email"
//               placeholder="Enter your Email"
//               name="email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//               errors={formik.errors.email}
//               touched={formik.touched.email}
//             />

//             <Input
//               divstyle="md:mt-4 mt-2"
//               label="Password"
//               labelstyle="text-white text8"
//               innerDiv="w-full text-white mt-2 rounded-md border-[1px] border-borderColor"
//               inputStyle="w-full text-white px-5 mr-6  md:py-3 py-2  bg-transparent text8"
//               placeholder="Enter your Password"
//               name="password"
//               onChange={formik.handleChange}
//               value={formik.values.password}
//               errors={formik.errors.password}
//               touched={formik.touched.password}
//               type="password"
//               withTogglePassword={true}
//             />
//           </div>

//           <p
//             onClick={() => navigate("/forgotPassword")}
//             className="text-right text-white underline md:my-5 my-2 cursor-pointer text8"
//           >
//             Forgot Password?
//           </p>

//           <Button
//             divstyle="w-full md:my-[10px] my-0 text-white bg-goldColor font-medium lg:py-3 py-2 text8"
//             btnname="Login"
//             type="submit"
//           />
//         </form>

//         <p className="text-white text9 text-center md:my-5 my-5">
//           Don't you have an account?
//           <span
//             onClick={() => navigate("/register")}
//             className="text-primaryColor underline cursor-pointer px-1"
//           >
//             Sign up
//           </span>
//         </p>
//       </div>

//       <AuthRightSide />
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { IMAGES } from "../../utils/Images";
import AuthRightSide from "./Components/AuthRightSide";
import { Loginvalidationschema } from "../../Utils/schema";
import AuthForm from "../../Components/AuthForm";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../Components/toast";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const fields = [
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your Email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your Password",
      withTogglePassword: true,
    },
  ];

  const handleSubmit = (values) => {
    showToast({ message: "Login Successfully", isError: false });
    setTimeout(() => {
      navigate("/");
      // dispatch(setAuth());
    }, 1000);
  };

  return (
    <div className="w-full gridTwo bg-white">
      <div className="mainContainer flex-col flexCenter mx-auto md:my-0 my-2 ">
        <img
          src={IMAGES.AUTH}
          className="block md:hidden mx-auto h-[200px] w-full  "
          alt="Logo"
        />
        <div className="w-full my-2">
          <p className="authheading font-semibold text-start text-secondaryColor">
            Login
          </p>
          <p className="authsubhead font-medium text-start text-secondaryColor">
            Welcome Back
          </p>
          <p className="authdesc inputtext font-normal text-secondaryColor">
            Please enter your Attendance credentials.
          </p>

          <AuthForm
            initialValues={initialValues}
            validationSchema={Loginvalidationschema}
            onSubmit={handleSubmit}
            fields={fields}
            forgot={true}
            btnname="Sign Up"
          />
        </div>
        <p className="text-secondaryColor inputtext text-center lg:my-2 w-full mb-2">
          Don't you have an account?
          <span
            onClick={() => navigate("/register")}
            className="text-primaryColor underline cursor-pointer px-1"
          >
            Sign up
          </span>
        </p>
      </div>

      <AuthRightSide />
    </div>
  );
};

export default Login;

// import React from 'react';

// const Login = () => {
//   return (
// <div className="min-h-screen flex">
//   {/* Left side: Login form */}
//   <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center p-8">
//     <h1 className="text-4xl font-bold mb-4">Login</h1>
//     <p className="text-gray-400 mb-8">Welcome back! Please enter your credentials.</p>
//     <form className="space-y-6">
//       <div>
//         <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
//         <input
//           id="email"
//           type="email"
//           required
//           className="mt-1 block w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-500"
//         />
//       </div>
//       <div>
//         <label htmlFor="password" className="block text-sm font-medium">Password</label>
//         <input
//           id="password"
//           type="password"
//           required
//           className="mt-1 block w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-500"
//         />
//       </div>
//       <div className="flex items-center justify-between">
//         <label className="flex items-center text-sm">
//           <input type="checkbox" className="h-4 w-4 text-indigo-500 rounded focus:ring-indigo-400" />
//           <span className="ml-2 text-gray-400">Remember me</span>
//         </label>
//         <a href="#" className="text-sm text-indigo-500 hover:underline">Forgot Password?</a>
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-indigo-600 text-white py-2.5 rounded-md shadow hover:bg-indigo-700 focus:outline-none"
//       >
//         Login
//       </button>
//     </form>
//   </div>

//   {/* Right side: Image and quote */}
//   <div className="w-1/2 bg-gray-800 flex items-center justify-center p-8">
//     <div className="text-center">
//       <img src="your-logo-path.png" alt="Code Dev Logo" className="mx-auto mb-6 w-40 h-40 object-cover" />
//       <h2 className="text-2xl font-bold text-white">Code Dev Innovations</h2>
//       <p className="mt-4 text-gray-400">"Attendance is the first step to success, be present to win."</p>
//     </div>
//   </div>
// </div>
//   );
// };

// export default Login;
