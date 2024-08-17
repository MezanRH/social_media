import React from 'react'
import { Helmet } from 'react-helmet-async'
import { toast, ToastContainer } from 'react-toastify'
import LoginForm from '../../components/authentication/LoginForm'
import LeftAuth from '../../components/authentication/LeftAuth'
import { LoginIcon } from '../../svg/LoginIcon'

const Login = () => {
  return (
    <>
    <ToastContainer/>
    <Helmet>
      <title>Registration</title>
    </Helmet>
      <div className=' relative z-[1]'>
      <div className=' hidden lg:block w-[300px] h-[300px] bg-purple-100 rounded-full absolute -left-[100px] -top-[100px] z-[-1]'></div>
      <div className=' container flex gap-x-6 justify-center items-center h-screen'>
        <div className=' lg:w-[35%] xl:w-[50%] hidden lg:block'>
          <LeftAuth icon={<LoginIcon/>} title="Login for access" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, totam, vel modi aut temporibus iusto ratione, eaque voluptatem reiciendis dolore rem doloremque suscipit eveniet. Fuga perspiciatis facere odio ipsum iste?"/>
        </div>
        <div className=' w-full lg:w-[35%] xl:w-[40%]'>
          <LoginForm toast={toast}/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Login