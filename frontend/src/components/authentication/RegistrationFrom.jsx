import React from 'react'
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUp } from '../../validation';

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  bYear: "",
  bMonth: "",
  bDay: "",
  gender: ""
}

const RegistrationFrom = () => {

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUp,
    onSubmit: ()=>{
      console.log("hello sing up");
    }
  })
  
  console.log(new Date().getFullYear());
  

  const { errors, touched } = formik
  // console.log(formik);
  console.log(errors);

  return (
    <div className=' w-full rounded-md shadow-md p-4 lg:px-11 lg:py-7 box-border border border-line_color lg:border-none'>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <input type="text" placeholder='Frist Name' className={errors.fName && touched.fName ? ' w-full px-4 py-2 border border-line_color rounded-md focus:outline-none' : ' w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'} onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='fName' value={formik.values.fName}/>
          {
            errors.fName && touched.fName && <p className=' font-noto font-normal text-red text-sm my-2'>{errors.fName}</p>
          }
          <input type="text" placeholder='Last Name' className={errors.fName && touched.lName ? ' w-full px-4 py-2 border border-line_color rounded-md focus:outline-none' : ' w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'} onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='lName' value={formik.values.lName}/>
          {
            errors.lName && touched.lName && <p className=' font-noto font-normal text-red text-sm my-2'>{errors.lName}</p>
          }
          <input type="email" placeholder='example@gmail.com' className={errors.email && touched.email ? ' w-full px-4 py-2 border border-line_color rounded-md focus:outline-none' : ' w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'} onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='email' value={formik.values.email}/>
          {
            errors.email && touched.email && <p className=' font-noto font-normal text-red text-sm my-2'>{errors.email}</p>
          }
          <input type="Password" placeholder='Password' className={errors.password && touched.password ? ' w-full px-4 py-2 border border-line_color rounded-md focus:outline-none' : ' w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'} onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='password' value={formik.values.password}/>
          {
            errors.password && touched.password && <p className=' font-noto font-normal text-red text-sm my-2'>{errors.password}</p>
          }
          
          <div className=' flex gap-x-1 lg:gap-x-7'>
            <select className=' border border-line_color w-[33%] font-noto font-normal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='bYear' value={formik.values.bYear}>
              <option>Year</option>
              <option>1992</option>
              <option>1993</option>
              <option>1994</option>
            </select>
            <select className=' border border-line_color w-[33%] font-noto font-normal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='bMonth' value={formik.values.bMonth}>
              <option>Month</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <select className=' border border-line_color w-[33%] font-noto font-normal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='bDay' value={formik.values.bDay}>
              <option>Day</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className=' mt-5'>
            <input type="radio" id='Male' name="gender" onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value="male"/>
            <label htmlFor="Male" className=' font-noto font-normal ml-2' >Male</label>
            <input type="radio" id='Femal' name="gender" className=' ml-5' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value="femal"/>
            <label htmlFor="Femal" className=' font-noto font-normal ml-2'>Femal</label>
          </div>
          {
            errors.gender && touched.gender && <p className=' font-noto font-normal text-red text-sm my-2'>{errors.gender}</p>
          }
          <div className=' sm:flex justify-between items-center mt-4'>
            <button type='submit' className='px-6 py-2 bg-secondary_bg rounded-full font-noto font-normal text-white'>Submit</button>
            <p className=' font-noto font-medium text-base 3xl:text-base xl:text-sm mt-5 sm:mt-0'>Already have an account? <Link to="/" className=' text-primary_color underline'>Sing In</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationFrom