import React from "react";

const Button = ({
  image,
  imagediv,
  imageStyle,
  divstyle,
  btnStyle,
  btnname,
  type,
  onPress,
  disabled,
}) => {
  return (
    <>
      <button
        className={
          divstyle
            ? divstyle
            : "w-full xl:my-5 my-3 flex justify-center rounded-md text-white font-medium bg-darkGrad lg:py-3 py-4 authdesc"
        }
        type={type}
        onClick={onPress}
        disabled={disabled}
      >
        {image ? (
          <div className={imagediv}>
            <img src={image} className={imageStyle} />
            <p className={btnStyle}>{btnname}</p>
          </div>
        ) : (
          <p className={btnStyle}>{btnname}</p>
        )}
      </button>
    </>
  );
};

export default Button;

{
  /* <button
    className="middle none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle
      font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10
      transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85]
      focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none
      disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
  >
    Button
  </button> */
}
