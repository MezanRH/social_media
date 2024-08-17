import React from 'react'

const LeftHomeData = ({data}) => {
  // console.log(data);

  const ItemIcom = data.icon
  
  return (
    <div className=' flex items-center gap-x-4 font-noto mb-6 hover:bg-black py-3 px-6 cursor-pointer rounded-full group transition-all ease-linear duration-100'>
      <div className=' group-hover:text-white transition-all ease-linear duration-100'>
        <ItemIcom/>
      </div>
      <div>
        <p className=' font-medium text-lg text-black group-hover:text-white transition-all ease-linear duration-100'>{data.tittle}</p>
      </div>
    </div>
  )
}

export default LeftHomeData