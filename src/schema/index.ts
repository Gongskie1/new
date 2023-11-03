import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    email: yup.string().email("please enter a vlaid email"),
    age: yup.number().positive().integer().required("Required"),
    password: yup
    .string()
    .min(5)
    .required('please enter your password'),
    cpassword: yup
    .string()
    .oneOf([yup.ref('password')],'password must match')
    .required('password please enter confirm password'),


})