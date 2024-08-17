import React from 'react'

const Gender = ({ formik, errors, touched }) => {
  return (
    <>
    <div className=' mt-5'>
            <input type="radio" id='Male' name="gender" onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value="male"/>
            <label htmlFor="Male" className=' font-noto font-normal ml-2' >Male</label>
            <input type="radio" id='Femal' name="gender" className=' ml-5' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value="femal"/>
            <label htmlFor="Femal" className=' font-noto font-normal ml-2'>Femal</label>
          </div>
          {
            errors.gender && touched.gender && <p className=' font-noto font-normal text-red text-sm my-2'>{errors.gender}</p>
          }
    </>
  )
}

export default Gender