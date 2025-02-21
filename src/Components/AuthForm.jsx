import React from "react";
import { useFormik } from "formik";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

const AuthForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  btnname,
  forgot,
}) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      {fields.map((field) => (
        <Input
          key={field.name}
          divstyle={
            field.divstyle ||
            `${formik.errors || formik.touched ? `md:mt-4 mt-2` : "mt-2"}`
          }
          label={field.label}
          labelstyle={field.labelstyle || "text-secondaryColor inputtext"}
          innerDiv={
            field.innerDiv ||
            "border-[1px] border-borderColor rounded-md w-full text-secondaryColor md:mt-2 mt-1"
          }
          inputStyle={
            field.inputStyle || "w-full lg:py-3 py-2 bg-transparent inputtext"
          }
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          onChange={formik.handleChange}
          value={formik.values[field.name]}
          errors={formik.errors[field.name]}
          touched={formik.touched[field.name]}
          withTogglePassword={field.withTogglePassword || false}
        />
      ))}
      {forgot && (
        <div className="flex items-center justify-between md:my-2 mt-[3px]">
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              className="md:h-4 md:w-4 h-3 w-3 rounded focus:outline-none"
            />
            <span className="ml-2 text-secondaryColor inputtext">
              Remember me
            </span>
          </label>
          <p
            onClick={() => navigate("/forgotPassword")}
            className="text-right text-secondaryColor underline md:my-5 my-2 cursor-pointer inputtext"
          >
            Forgot Password?
          </p>
        </div>
      )}

      <Button btnname={btnname} type="submit" />
    </form>
  );
};

export default AuthForm;
