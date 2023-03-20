import { useFormik } from "formik";
import * as yup from "yup"

const formvalidationSchema=yup.object({
  email:yup.string().required("why not fill").min(5,"type minimum five chracter"),
  password:yup.string().required("fill the password").min(8,"minimum five cgharacter").max(12,"maximum twele character")

})
export function BasicForm() {
  const {handleChange,handleSubmit,values, handleBlur,errors,touched}=useFormik({
    initialValues:{email:"",password:""},
    validationSchema:formvalidationSchema,
    onSubmit:(values)=>{
      console.log(values)
    },
    
  });
  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input name="email"
       type="email"
        placeholder="email" 
        value={values.email}
         onChange={handleChange}
         onBlur={handleBlur} />
         {errors.email&&touched.email?errors.email:errors.email}
         
      <input name="password"
       type="password" 
       placeholder="password"
        value={values.password} 
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {errors.password&&touched.password?errors.password:errors.password}
      <button type="submit">submit</button>
      <pre>{JSON.stringify(values)}</pre>
    </form>
  );
}
