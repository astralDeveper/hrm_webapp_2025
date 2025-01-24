import React, { useState } from "react";
import { IMAGES } from "../../utils/Images";
import Button from "../../Components/Button";
import Divider from "../../Components/Divider";
import AuthRightSide from "./Components/AuthRightSide";
import { useNavigate } from "react-router-dom";
import { Loginvalidationschema } from "../../Utils/schema";
import { useFormik } from "formik"
import Input from "./Input";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Loginvalidationschema,
    onSubmit: (values) => {
      navigate("/")
    },
  });


  return (
    <div className="w-full grid md:grid-cols-2 grid-rows-1 bg-secondaryColor h-screen">
      <div className="mainContainer flex  flex-col    items-center  justify-center     mx-auto  h-screen  ">
        <img
          src={IMAGES.AUTH}
          className="block md:hidden mx-auto h-[200px] w-full my-2"
          alt="Logo"
        />
        <form onSubmit={formik.handleSubmit} className=" w-full">
          <div> 
            <p className="authheading font-semibold text-start text-white">Login</p>
            <p className="authsubhead text-start text-white"> Welcome Back</p>
            <p className="authdesc text8 font-medium text-white"> Please enter your Attendance credentials.</p>

            <Input
              divstyle="md:mt-7 mt-2"
              label="Email Address"
              labelstyle="text-white text8"
              innerDiv="border-[1px] border-borderColor rounded-md w-full text-white mt-2"
              inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent text8"
              type="email"
              placeholder="Enter your Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email}
              touched={formik.touched.email}
            />

            <Input
              divstyle="md:mt-7 mt-2"
              label="Password"
              labelstyle="text-white text8"
              innerDiv="w-full text-white mt-2 rounded-md border-[1px] border-borderColor"
              inputStyle="w-full text-white px-5 mr-6  md:py-3 py-2  bg-transparent text8"
              placeholder="Enter your Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password}
              touched={formik.touched.password}
              type="password" 
              withTogglePassword={true} 
            />

          </div>

          <p
            onClick={() => navigate("/forgotPassword")}
            className="text-right text-white underline md:my-5 my-2 cursor-pointer text8"
          >
            Forgot Password?
          </p>

          <Button
            divstyle="w-full md:my-[10px] my-0 text-white bg-goldColor font-medium lg:py-3 py-2 text8"
            btnname="Login"
            type="submit"
          />

        </form>



        <p className="text-white text9 text-center md:my-5 my-5">
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
