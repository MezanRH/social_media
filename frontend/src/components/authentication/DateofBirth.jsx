import React from 'react'

const DateofBirth = ({ formik, years, month, getDate, ageError}) => {
  return (
    <>
    <div className=' flex gap-x-1 lg:gap-x-7'>
            <select className=' border border-line_color w-[33%] font-noto font-normal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='bYear' value={formik.values.bYear}>
              <option>Year</option>
              {
                years.map((years, index) =>(
                  <option key={index}>{years}</option>
                ))
              }
            </select>
            <select className=' border border-line_color w-[33%] font-noto font-normal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='bMonth' value={formik.values.bMonth}>
              <option>Month</option>
              {
                month.map((month, index)=>(
                  <option key={index}>{month}</option>
                ))
              }
            </select>
            <select className=' border border-line_color w-[33%] font-noto font-normal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='bDay' value={formik.values.bDay}>
              <option>Day</option>
              {
                getDate.map((date, index)=>(
                  <option key={index}>{date}</option>
                ))
              }
            </select>
          </div>
          {ageError && <p className=' font-noto font-normal text-red text-sm my-2'>{ageError}</p>}
    </>
  )
}

export default DateofBirth