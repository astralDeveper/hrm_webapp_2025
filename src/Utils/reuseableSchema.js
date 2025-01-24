import * as Yup from 'yup';

// Utility function for email validation
export const emailValidation = () =>
    Yup.string()
        .email('Must be a valid email')
        .required('Email is required')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid Email Address");

export const passwordValidation = () =>
    Yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/,
            "Must contain 10 characters, one uppercase, one lowercase, one number, and one special case character"
        );

export const confirmPasswordValidation = (refField = 'password') =>
    Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref(refField), null], 'Confirm Password must match with Password');
