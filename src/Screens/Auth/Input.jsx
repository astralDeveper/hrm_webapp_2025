import React, { useState } from "react"; 
import { IMAGES } from "../../Utils/images";

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

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const renderInputType = () => {
    if (withTogglePassword && type === "password") {
      // Password input with visibility toggle
      return (
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          className={`placeholder-placeHolder   focus:outline-none ${inputStyle} ${
            leadingImage ? "pl-1" : ""
          }`} // Adds padding if image is present
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          pattern={pattern}
          autoComplete="off"
        />
      );
    }

    // Regular input (text, email, etc.)
    return (
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        className={`placeholder-placeHolder w-full focus:outline-none ${inputStyle} ${
          leadingImage ? "pl-1" : ""
        }`} // Adds padding if image is present
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        pattern={pattern}
        autoComplete="off"
      />
    );
  };

  return (
    <div className={divstyle}>
      {label && (
        <label htmlFor={htmlFor} className={labelstyle}>
          {label}
        </label>
      )}
      <div className={`relative flex items-center w-full ${innerDiv}`}>
        {leadingImage && <img src={leadingImage} alt="" className={imageStyle} />}
        {renderInputType()}
        {withTogglePassword && type === "password" && (
          <span
            className={`absolute right-0 md:top-5 top-3 cursor-pointer`}
            onClick={togglePasswordVisibility}
          >
            <img
              src={showPassword ? IMAGES.SHOW : IMAGES.HIDDEN}
              alt="toggle visibility"
              className="lg:w-4 lg:h-4 -mt-1 w-4 h-3 md:mr-4 mr-3"
            />
          </span>
        )}
      </div>
      {errors && touched && (
        <div className="text-end mt-2 text10 text-red-500">{errors}</div>
      )}
    </div>
  );
};

export default Input;