import React from 'react'
import AuthRightSide from './Components/AuthRightSide'
import { IMAGES } from '../../utils/Images';
import Button from '../../Components/Button'; 
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Forgotvalidationschema } from '../../Utils/schema';
import Input from './Input';

const Email = () => {

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Forgotvalidationschema,
    onSubmit: (values) => {
      navigate("/otp")
    },
  });

  return (
    <div className="w-full grid md:grid-cols-2 grid-rows-1 bg-secondaryColor">
      <div className="md:w-[70%]  w-[90%] mx-auto py-5 flex flex-col items-center justify-center h-screen">

        <img
          src={IMAGES.SIGNINIMG}
          className="block md:hidden mx-auto h-[200px] w-full my-2"
          alt="Logo"
        />

        <div className=' w-full' >
          <form onSubmit={formik.handleSubmit} > 
            <div className="flex md:gap-4 gap-2 items-center text2 lg:mb-20  text-start  ">
              <p className="text2  font-medium text-white ">Forgot Password</p>
              <img src={IMAGES.AUTH_LOCK} className='lg:w-[25px]  lg:h-[35px] md:w-[20px] md:h-[20px] w-[16px] h-[16px] object-contain' />
            </div>

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


            <Button

              divstyle="focus:outline-none w-full md:mb-[10px] mb-0 text-white bg-goldColor font-medium lg:py-3 py-2 text8 mt-5"
              btnname="Continue"
              type="submit"
            />
          </form>
        </div>


      </div>
      <AuthRightSide />
    </div>
  )
}

export default Email

