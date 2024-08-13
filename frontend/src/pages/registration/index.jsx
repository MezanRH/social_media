import React from 'react'
import LeftAuth from '../../components/authentication/LeftAuth'
import { Registrations } from '../../svg/Registration'
import RegistrationFrom from '../../components/authentication/RegistrationFrom'
import { Helmet } from 'react-helmet-async'

function Registration() {
  return (
    <>
    <Helmet>
      <title>Registration</title>
    </Helmet>
      <div className=' relative z-[1]'>
      <div className=' hidden lg:block w-[300px] h-[300px] bg-purple-100 rounded-full absolute -left-[100px] -top-[100px] z-[-1]'></div>
      <div className=' container flex gap-x-6 justify-center items-center h-screen'>
        <div className=' lg:w-[35%] xl:w-[50%] hidden lg:block'>
          <LeftAuth icon={<Registrations/>} title="Start Your Journey" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, totam, vel modi aut temporibus iusto ratione, eaque voluptatem reiciendis dolore rem doloremque suscipit eveniet. Fuga perspiciatis facere odio ipsum iste?"/>
        </div>
        <div className=' w-full lg:w-[35%] xl:w-[40%]'>
          <RegistrationFrom/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Registration