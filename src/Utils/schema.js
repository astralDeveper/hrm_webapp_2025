import * as Yup from 'yup';
import { confirmPasswordValidation, emailValidation, passwordValidation } from "./reuseableSchema";
 
 
export const Loginvalidationschema = Yup.object({
  email: emailValidation(),
  password: passwordValidation(),
});

export const Signupvalidationschema = Yup.object({
  first_name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('First Name is required'),
  
  last_name: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Last Name is required'),
  
  email: emailValidation(),
  
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone Number must contain only numbers')
    .min(10, 'Phone Number must contain at least 10 numbers')
    .max(16, 'Phone Number must contain at most 16 numbers')
    .required('Phone Number is required'),
  
  password: passwordValidation(),
  
  confirm_password: confirmPasswordValidation(),
});

export const Forgotvalidationschema = Yup.object({
  email: emailValidation(),
});

export const Changepasswordschema = Yup.object({
  password: passwordValidation(),
  confirm_password: confirmPasswordValidation(),
});
