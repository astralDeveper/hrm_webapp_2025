import React, { useState } from "react";
import { IMAGES } from "../utils/Images";

const Input = ({
  label,
  type = "text", // Default type is text
  placeholder,
  labelstyle,
  inputStyle,
  divstyle,
  name,
  htmlFor,
  id,
  onChange,
  value,
  errors,
  touched,
  disabled,
  maxLength,
  pattern,
  innerDiv,
  leadingImage, // Optional image for text input fields
  imageStyle, // Optional: Style for the image
  withTogglePassword = false, // Determines if it's a password input with toggle
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Separate state for confirm password

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const isPasswordField = type === "password";
  const isConfirmPasswordField = type === "confirm_password";

  const getInputType = () => {
    if (isPasswordField) {
      return showPassword ? "text" : "password";
    }
    if (isConfirmPasswordField) {
      return showConfirmPassword ? "text" : "password";
    }
    return type;
  };

  return (
    <div className={divstyle}>
      {label && (
        <label htmlFor={htmlFor} className={labelstyle}>
          {label}
        </label>
      )}
      <div className={`relative flexCenter w-full ${innerDiv}`}>
        {leadingImage && (
          <img src={leadingImage} alt="" className={imageStyle} />
        )}
        <input
          type={getInputType()} // Dynamically set the type based on visibility state
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          className={`placeholder-placeHolder w-full focus:outline-none ${inputStyle}   ${
            leadingImage || isPasswordField || isConfirmPasswordField
              ? "pl-5 pr-10"
              : "px-5"
          }`} // Adds padding if image is present and sets the background color
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          pattern={pattern}
          autoComplete="off"
        />
        {isPasswordField && (
          <span
            className="absolute right-0 md:top-4 top-[14px] cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            <img
              src={showPassword ? IMAGES.SHOW : IMAGES.HIDDEN}
              alt="toggle visibility"
              className="lg:w-4 lg:h-4 -mt-1 w-4 h-3 md:mr-4 mr-3"
            />
          </span>
        )}
        {isConfirmPasswordField && (
          <span
            className="absolute right-0 md:top-4 top-[14px] cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
          >
            <img
              src={showConfirmPassword ? IMAGES.SHOW : IMAGES.HIDDEN}
              alt="toggle visibility"
              className="lg:w-4 lg:h-4 -mt-1 w-4 h-3 md:mr-4 mr-3"
            />
          </span>
        )}
      </div>
      {errors && touched && (
        <div className="text-end mt-2 authdesc text-red-500">{errors}</div>
      )}
    </div>
  );
};

export default Input;
