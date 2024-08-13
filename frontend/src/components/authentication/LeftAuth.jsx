import React from 'react'

const LeftAuth = ({title, description, icon}) => {
  return (
    <div>
      <div>{icon}</div>
      <h1 className=' font-noto font-bold text-2xl text-primary_color 2xl:text-6xl xl:text-7xl'>{title}</h1>
      <p className=' font-noto font-normal text-base xl:text-lg text-text_color mt-5'>{description} </p>
    </div>
  )
}

export default LeftAuth