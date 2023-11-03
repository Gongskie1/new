import { useFormik } from "formik";
import { basicSchema } from "../schema";

const onSubmit = () =>{
  console.log('submitted')
}

const BasicForm = () => {


  const {values, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues : { 
      email: '',
      age: '',
      password: '',
      cpassword:''
     },
     validationSchema: basicSchema,
     onSubmit
  })
  return (
    <div className="flex flex-col">
      <form autoComplete="off" className=" flex flex-col">
        <label htmlFor="email">Email</label>
        <input
         type="email" 
         id="email" 
         placeholder="Enter your Email" 
         value={values.email} 
         onChange={handleChange}
         onBlur={handleBlur}/>

          <label htmlFor="age">age</label>
        <input
         type="number" 
         id="age" 
         placeholder="Enter your age" 
         value={values.age} 
         onChange={handleChange}
         onBlur={handleBlur}/>

          <label htmlFor="password">password</label>
        <input
         type="password" 
         id="password" 
         placeholder="Enter your password" 
         value={values.password} 
         onChange={handleChange}
         onBlur={handleBlur}/>

         <label htmlFor="cpassword">Confirm Password</label>
         <input
         type="cpassword" 
         id="cpassword" 
         placeholder="Enter your cpassword" 
         value={values.cpassword} 
         onChange={handleChange}
         onBlur={handleBlur}/>
      </form>
      <p>{values.email}</p>
      <p>{values.age}</p>
      <p>{values.password}</p>
      <p>{values.cpassword}</p>
    </div>
  )
}

export default BasicForm
