import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUp } from '../../validation';
import DateofBirth from './DateofBirth';
import Gender from './Gender';
import { useAddUserMutation } from '../../features/api/authApi';

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  bYear: new Date().getFullYear(),
  bMonth: new Date().getMonth() + 1,
  bDay: new Date().getDate(),
  gender: ""
}

const RegistrationFrom = ({ toast }) => {

  const [ageError, setAgeError] = useState("")
  const [addUser,] = useAddUserMutation()

  const registration = async ()=>{
    const singUpMutation = await addUser({
      fName: formik.values.fName,
      lName: formik.values.lName,
      email: formik.values.email,
      password: formik.values.password,
      bYear: formik.values.bYear,
      bMonth: formik.values.bMonth,
      bDay: formik.values.bDay,
      gender: formik.values.gender,
    })

    if(singUpMutation?.data){
      toast.success(singUpMutation.data?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        theme: "light",
        });
        setTimeout(()=>{
          Navigate("/login");
        },2000)
    }else if(singUpMutation?.error){
      toast.error(singUpMutation.error?.data?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        theme: "light",
        });
    }

    // console.log(singUpMutation?.data);
    // console.log(singUpMutation.error?.data?.message);
    
    
  }

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUp,
    onSubmit: ()=>{
      
      const currentDate = new Date()
      const picked_Date = new Date(
        formik.values.bYear,
        formik.values.bMonth - 1,
        formik.values.bDay
      )

      const adult = new Date(1970 + 18, 0, 1);
      const tooOld = new Date(1970 + 70, 0, 1)
      if (currentDate - picked_Date < adult) {
        return setAgeError("underage you are not 18");
      }else if(currentDate - picked_Date > tooOld){
        return setAgeError("You are more than 70");
      }
      registration()
      formik.resetForm()
      setAgeError("")
      

    },
  })

  const tempYears = new Date().getFullYear();
  const years = Array.from(new Array(105),(val,index)=> tempYears - index)

  const month = Array.from(new Array(12),(val, index)=> 1 + index)

  const day = () => {
    return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate();
  }

  const getDate = Array.from(new Array(day()), (val, index) => 1 + index);
  // console.log(getDate);
  

  // console.log(years);
  // console.log(month);
  
  
  
  // console.log(new Date().getDate());
  

  const { errors, touched } = formik
  // console.log(formik);
  // console.log(errors);

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
          
          <DateofBirth 
          formik={formik} 
          years={years} 
          month={month} 
          getDate={getDate} 
          ageError={ageError}
          />
          <Gender 
          formik={formik}
          errors={errors} 
          touched={touched}
          />
          
          <div className=' sm:flex justify-between items-center mt-4'>
            <button type='submit' className='px-6 py-2 bg-secondary_bg rounded-full font-noto font-normal text-white'>Submit</button>
            <p className=' font-noto font-medium text-base 3xl:text-base xl:text-sm mt-5 sm:mt-0'>Already have an account? <Link to="/login" className=' text-primary_color underline'>Sing In</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationFrom