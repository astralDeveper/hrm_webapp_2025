import React from "react";
import AuthRightSide from "./Components/AuthRightSide";
import { IMAGES } from "../../utils/Images";
import { useNavigate } from "react-router-dom";
import { Changepasswordschema } from "../../Utils/schema";
import AuthForm from "../../Components/AuthForm";
import { showToast } from "../../Components/toast";

const SetPassword = () => {
  const navigate = useNavigate();

  const initialValues = {
    password: "",
    confirm_password: "",
  };

  const fields = [
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
      type: "confirm_password",
      placeholder: "Enter your Confirm Password",
      withTogglePassword: true,
    },
  ];

  const handleSubmit = (values) => {
    showToast({ message: "Password Changed Successfully", isError: false });
    setTimeout(() => {
      navigate("/otp");
    }, 1000);
  };

  return (
    <div className="w-full grid md:grid-cols-2 grid-rows-1 bg-white">
      <div className="md:w-[70%] w-[90%] mx-auto py-5 flex flex-col items-center justify-center h-screen">
        <img
          src={IMAGES.AUTH}
          className="block md:hidden mx-auto h-[200px] w-full my-2"
          alt="Logo"
        />

        <div className="w-full my-2">
          <p className="authheading font-semibold text-start text-secondaryColor">
            Reset Password
          </p>

          <p className="authdesc inputtext font-normal text-secondaryColor">
            Please enter your Attendance credentials.
          </p>

          <AuthForm
            initialValues={initialValues}
            validationSchema={Changepasswordschema}
            onSubmit={handleSubmit}
            fields={fields}
            btnname="Sign Up"
          />
        </div>
      </div>
      <AuthRightSide />
    </div>
  );
};

export default SetPassword;
