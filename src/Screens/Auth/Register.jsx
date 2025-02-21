// import React, { useState } from "react";
// import { IMAGES } from "../../utils/Images";
// import Button from "../../Components/Button";
// import AuthRightSide from "./Components/AuthRightSide";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import { Signupvalidationschema } from "../../Utils/schema";
// import Input from "./Input";

// const Register = () => {

//   const navigate = useNavigate()

//     const formik = useFormik({
//       initialValues: {
//         first_name: "",
//         last_name: "",
//         email: "",
//         phone: "",
//         password: "",
//         confirm_password: "",
//       },
//       validationSchema: Signupvalidationschema,
//       onSubmit: (values) => {
//         navigate("/login")
//       },
//     });

//   return (
//     <div className="w-full grid md:grid-cols-2 grid-rows-1 bg-secondaryColor">
//       <div className="md:w-[70%] w-[90%] mx-auto py-5  2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center  overflow-auto  custom-scrollbar md:h-screen">
//         <img
//           src={IMAGES.SIGNINIMG}
//           className="block md:hidden mx-auto h-[200px] w-full my-2"
//           alt="Logo"
//         />
//          <form  onSubmit={formik.handleSubmit} >
//        <div className="w-full">
//           <div className="flex gap-4 items-center text2   md:mt-0 mt-4">
//             <p className="text-start text-white"> Create Your Account </p>
//             <p>👋</p>
//           </div>

//           <p className="text8 font-medium text-white">  Today is a new day. It's your day. You shape it.
//           Sign in to get started. </p>

//           <div className="">

//           <Input
//               divstyle="md:mt-7 mt-2"
//               label="Email Address"
//               labelstyle="text-white text8"
//               innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
//               inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
//               type="email"
//               placeholder="Enter your Email"
//               name="email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//               errors={formik.errors.email}
//               touched={formik.touched.email}
//             />

// <Input
//               divstyle="md:mt-7 mt-2"
//               label="Email Address"
//               labelstyle="text-white text8"
//               innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
//               inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
//               type="email"
//               placeholder="Enter your Email"
//               name="email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//               errors={formik.errors.email}
//               touched={formik.touched.email}
//             />

// <Input
//               divstyle="md:mt-7 mt-2"
//               label="Email Address"
//               labelstyle="text-white text8"
//               innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
//               inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
//               type="email"
//               placeholder="Enter your Email"
//               name="email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//               errors={formik.errors.email}
//               touched={formik.touched.email}
//             />

// <Input
//               divstyle="md:mt-7 mt-2"
//               label="Email Address"
//               labelstyle="text-white text8"
//               innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
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
//               divstyle="md:mt-7 mt-2"
//               label="Password"
//               labelstyle="text-white text8"
//               innerDiv="w-full text-white mt-2"
//               inputStyle="w-full text-white px-5 md:py-3 py-2 border-[1px] border-borderColor bg-transparent text8"
//               placeholder="Enter your Password"
//               name="password"
//               onChange={formik.handleChange}
//               value={formik.values.password}
//               errors={formik.errors.password}
//               touched={formik.touched.password}
//               type="password" // Specify it's a password input
//               withTogglePassword={true} // Enable password visibility toggle
//             />

// <Input
//               divstyle="md:mt-7 mt-2"
//               label="Password"
//               labelstyle="text-white text8"
//               innerDiv="w-full text-white mt-2"
//               inputStyle="w-full text-white px-5 md:py-3 py-2 border-[1px] border-borderColor bg-transparent text8"
//               placeholder="Enter your Password"
//               name="password"
//               onChange={formik.handleChange}
//               value={formik.values.password}
//               errors={formik.errors.password}
//               touched={formik.touched.password}
//               type="password" // Specify it's a password input
//               withTogglePassword={true} // Enable password visibility toggle
//             />

//           </div>

//           <Button
//             // onPress={() => navigate("/login")}
//             divstyle="w-full md:my-10 my-2  text-white bg-goldColor font-medium lg:py-3 py-2 text8"
//             btnname="Sign Up"
//             type="submit"
//           />
//         </div>
//         </form>

//         <p className="text-white text9 text-center my-2">Don't you have an account?<span onClick={() => navigate('/login')} className="text-primaryColor underline cursor-pointer px-1">Sign In</span></p>
//       </div>

//       <AuthRightSide />

//     </div>

//   );
// };

// export default Register;

// import React from "react"; // Assuming you have validation schemas
// import AuthForm from "../../Components/AuthForm";
// import { Signupvalidationschema } from "../../Utils/schema";

// const Register = () => {
//   const initialValues = {
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirm_password: "",
//   };

//   const fields = [
//     {
//       name: "first_name",
//       label: "First Name",
//       type: "text",
//       placeholder: "Enter your First Name",
//     },
//     {
//       name: "last_name",
//       label: "Last Name",
//       type: "text",
//       placeholder: "Enter your Last Name",
//     },
//     {
//       name: "email",
//       label: "Email Address",
//       type: "email",
//       placeholder: "Enter your Email",
//     },
//     {
//       name: "phone",
//       label: "Phone Number",
//       type: "tel",
//       placeholder: "Enter your Phone Number",
//     },
//     {
//       name: "password",
//       label: "Password",
//       type: "password",
//       placeholder: "Enter your Password",
//       withTogglePassword: true,
//     },
//     {
//       name: "confirm_password",
//       label: "Confirm Password",
//       type: "password",
//       placeholder: "Confirm your Password",
//       withTogglePassword: true,
//     },
//   ];

//   const handleSubmit = (values) => {
//     console.log("Register form submitted", values);
//     // Handle register logic
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <AuthForm
//         initialValues={initialValues}
//         validationSchema={Signupvalidationschema}
//         onSubmit={handleSubmit}
//         fields={fields}
//       />
//     </div>
//   );
// };

// export default Register;

import { IMAGES } from "../../utils/Images";
import AuthRightSide from "./Components/AuthRightSide";
import { Signupvalidationschema } from "../../Utils/schema";
import AuthForm from "../../Components/AuthForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  };

  const fields = [
    {
      name: "first_name",
      label: "First Name",
      type: "text",
      placeholder: "Enter your First Name",
    },
    {
      name: "last_name",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your Last Name",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your Email",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your Phone Number",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your Password",
      withTogglePassword: true,
    },
    {
      name: "confirm_password",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your Password",
      withTogglePassword: true,
    },
  ];

  const handleSubmit = (values) => {
    navigate("/login");
  };

  return (
    <div className="w-full gridTwo bg-white">
      <div className="mainContainer mx-auto md:py-5  2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center  overflow-auto  custom-scrollbar md:h-screen">
        <img
          src={IMAGES.AUTH}
          className="block md:hidden mx-auto h-[200px] w-full my-2"
          alt="Logo"
        />

        <div className="w-full">
          <div className="flex gap-4 items-center authsubhead md:mt-0 mt-4">
            <p className="text-start text-black"> Create Your Account </p>
            <p>👋</p>
          </div>

          <p className=" text-black">
            Today is a new day. It's your day. You shape it. Sign in to get
            started.
          </p>

          <AuthForm
            initialValues={initialValues}
            validationSchema={Signupvalidationschema}
            onSubmit={handleSubmit}
            fields={fields}
            btnname="Sign Up"
          />
        </div>
        <p className="text-black inputtext text-center lg:my-2 mb-2">
          Don't you have an account?
          <span
            onClick={() => navigate("/login")}
            className="text-primaryColor underline cursor-pointer px-1"
          >
            Sign In
          </span>
        </p>
      </div>

      <AuthRightSide />
    </div>
  );
};

export default Register;
