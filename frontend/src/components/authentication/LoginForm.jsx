import React from 'react'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { singIn } from '../../validation';
import { useLoggedInUserMutation } from '../../features/api/authApi';
import { BiLoaderCircle } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { loggedInUsers } from '../../features/users/authSlice';

const initialState = {
  email: "",
  password: ""
}

const LoginForm = ({toast}) => {
  const [loggedInUser, {isLoading}] = useLoggedInUserMutation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginUser = async ()=>{
    const loginMutation = await loggedInUser({
      email: formik.values.email,
      password: formik.values.password
    })
    if(loginMutation?.error){
      toast.error(loginMutation.error?.data?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        theme: "light",
        });
        return
    }

    const {message, ...rest} = loginMutation.data
    dispatch(loggedInUsers(rest));
    localStorage.setItem("user", JSON.stringify(rest));

    // console.log(loginMutation.data);
    // console.log(rest);
    
    
    navigate("/")
    
  }

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: singIn,
    onSubmit: ()=>{
      console.log("Login submitted");
      loginUser()
      formik.resetForm()
    },
  })

  const { errors, touched } = formik

  return (
    <>
     <div className=' w-full rounded-md shadow-md p-4 lg:px-11 lg:py-7 box-border border border-line_color lg:border-none'>
      <div>
        <form onSubmit={formik.handleSubmit}>
          
          <input type="email" placeholder='example@gmail.com' className={errors.email && touched.email ? ' w-full px-4 py-2 border border-line_color rounded-md focus:outline-none' : ' w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'} onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='email' value={formik.values.email}/>
          {
            errors.email && touched.email && <p className=' font-noto font-normal text-red text-sm my-2'>{errors.email}</p>
          }
          <input type="Password" placeholder='Password' className={errors.password && touched.password ? ' w-full px-4 py-2 border border-line_color rounded-md focus:outline-none' : ' w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'} onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='password' value={formik.values.password}/>
          {
            errors.password && touched.password && <p className=' font-noto font-normal text-red text-sm my-2'>{errors.password}</p>
          }
          
          <div className=' sm:flex justify-between items-center mt-4'>
            {
              isLoading ? (
                <button disabled type='submit' className='px-6 py-2 bg-secondary_bg rounded-full font-noto font-normal text-white'>
                  <BiLoaderCircle />
                </button>
              ) :(
                <button type='submit' className='px-6 py-2 bg-secondary_bg rounded-full font-noto font-normal text-white'>Login</button>
              )
            }
            
            <p className=' font-noto font-medium text-base 3xl:text-base xl:text-sm mt-5 sm:mt-0'>Don't have an account? <Link to="/registration" className=' text-primary_color underline'>Sing Up</Link></p>
          </div>
        </form>
      </div>
    </div> 
    </>
  )
}

export default LoginForm