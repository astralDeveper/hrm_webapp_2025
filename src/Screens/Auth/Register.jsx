import React, { useState } from "react";
import { IMAGES } from "../../utils/Images"; 
import Button from "../../Components/Button";
import AuthRightSide from "./Components/AuthRightSide";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Signupvalidationschema } from "../../Utils/schema";
import Input from "./Input";

const Register = () => {

  const navigate = useNavigate()

    const formik = useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: Signupvalidationschema,
      onSubmit: (values) => { 
        navigate("/login")
      },
    });

  return (
    <div className="w-full grid md:grid-cols-2 grid-rows-1 bg-secondaryColor">
      <div className="md:w-[70%] w-[90%] mx-auto py-5  2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center  overflow-auto  custom-scrollbar md:h-screen">
        <img
          src={IMAGES.SIGNINIMG}
          className="block md:hidden mx-auto h-[200px] w-full my-2"
          alt="Logo"
        />
         <form  onSubmit={formik.handleSubmit} >
       <div className="w-full">
          <div className="flex gap-4 items-center text2   md:mt-0 mt-4">
            <p className="text-start text-white"> Create Your Account </p>
            <p>👋</p>
          </div>

          <p className="text8 font-medium text-white">  Today is a new day. It's your day. You shape it. 
          Sign in to get started. </p>

          <div className="">

          <Input
              divstyle="md:mt-7 mt-2"
              label="Email Address"
              labelstyle="text-white text8"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
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
              label="Email Address"
              labelstyle="text-white text8"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
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
              label="Email Address"
              labelstyle="text-white text8"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
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
              label="Email Address"
              labelstyle="text-white text8"
              innerDiv="border-[1px] border-borderColor w-full text-white mt-2"
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
              innerDiv="w-full text-white mt-2"
              inputStyle="w-full text-white px-5 md:py-3 py-2 border-[1px] border-borderColor bg-transparent text8"
              placeholder="Enter your Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password}
              touched={formik.touched.password}
              type="password" // Specify it's a password input
              withTogglePassword={true} // Enable password visibility toggle
            />

<Input
              divstyle="md:mt-7 mt-2"
              label="Password"
              labelstyle="text-white text8"
              innerDiv="w-full text-white mt-2"
              inputStyle="w-full text-white px-5 md:py-3 py-2 border-[1px] border-borderColor bg-transparent text8"
              placeholder="Enter your Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password}
              touched={formik.touched.password}
              type="password" // Specify it's a password input
              withTogglePassword={true} // Enable password visibility toggle
            />

          </div>


          <Button
            // onPress={() => navigate("/login")}
            divstyle="w-full md:my-10 my-2  text-white bg-goldColor font-medium lg:py-3 py-2 text8"
            btnname="Sign Up"
            type="submit"
          />
        </div>
        </form>


        <p className="text-white text9 text-center my-2">Don't you have an account?<span onClick={() => navigate('/login')} className="text-primaryColor underline cursor-pointer px-1">Sign In</span></p>
      </div>


      <AuthRightSide />

    </div>

  );
};

export default Register;



