import { useFormik } from "formik";
import { basicSchema } from "../schema";

const onSubmit = () =>{
  console.log('submitted')
}

const BasicForm = () => {


  const {values, errors, handleBlur, isSubmitting , handleChange, handleSubmit} = useFormik({
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
        {errors.email && <p className="text-[red]">{errors.email}</p> }
        <label htmlFor="age">age</label>
        <input
         type="number" 
         id="age" 
         placeholder="Enter your age" 
         value={values.age} 
         onChange={handleChange}
         onBlur={handleBlur}/>
        {errors.age && <p className="text-[red]">{errors.age}</p> }
        <label htmlFor="password">password</label>
        <input
         type="password" 
         id="password" 
         placeholder="Enter your password" 
         value={values.password} 
         onChange={handleChange}
         onBlur={handleBlur}/>
         {errors.password && <p className="text-[red]">{errors.password}</p> }
         <label htmlFor="cpassword">Confirm Password</label>
         <input
         type="cpassword" 
         id="cpassword" 
         placeholder="Enter your cpassword" 
         value={values.cpassword} 
         onChange={handleChange}
         onBlur={handleBlur}/>
         {errors.cpassword && <p className="text-[red]">{errors.cpassword}</p> }

         <button disabled={isSubmitting} type="submit">submit</button>
      </form>
    </div>
  )
}

export default BasicForm
