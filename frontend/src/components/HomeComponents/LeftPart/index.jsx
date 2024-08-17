import React from 'react'
import LeftProfile from './LeftProfile'
import LeftHomeData from './LeftHomeData'
import { LeftData } from './Data'

const LeftPart = () => {
  return (
    <>
    <div>
    <LeftProfile/>
    </div>
    <div className=' mt-10 w-3/4 mx-auto'> 
      {
        LeftData.map((data, index)=>(
          <LeftHomeData data={data} key={index}/>
        ))
      }
      
    </div>
    </>
  )
}

export default LeftPart