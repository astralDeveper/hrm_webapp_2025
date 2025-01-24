import React from 'react'
import AuthRightSide from './Components/AuthRightSide'
import { IMAGES } from '../../utils/Images';
import Button from '../../Components/Button';
import { useNavigate } from "react-router-dom";
import { Changepasswordschema } from '../../Utils/schema';
import { useFormik } from 'formik';
import Input from './Input';

const SetPassword = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            password: "",
            confirm_password: "",
        },
        validationSchema: Changepasswordschema,
        onSubmit: (values) => {
            navigate("/success")
        },
    });

    return (
        <div className="w-full grid md:grid-cols-2 grid-rows-1 bg-secondaryColor">
            <div className="md:w-[70%] w-[90%] mx-auto py-5 flex flex-col items-center justify-center h-screen">

                <img
                    src={IMAGES.SIGNINIMG}
                    className="block md:hidden mx-auto h-[200px] w-full my-2"
                    alt="Logo"
                />
                <form onSubmit={formik.handleSubmit} >
                    <div >
                        <div className="flex gap-4 items-center text2  text-start  ">
                            <p className="text2  font-medium text-white ">New Password</p>
                            <p>👋</p>
                        </div>

                        <p className="text8 font-medium text-white md:mt-5 mt-2">Set the new password for your account so you can login and access all featuress.</p>

                        <div className="">
                             

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
                            divstyle="w-full md:mb-[10px] mb-0 text-white bg-goldColor font-medium lg:py-3 py-2 text8 mt-5"
                            btnname="Continue"
                            type="submit"
                        />
                    </div>
                </form>


            </div>
            <AuthRightSide />
        </div>
    );
}

export default SetPassword