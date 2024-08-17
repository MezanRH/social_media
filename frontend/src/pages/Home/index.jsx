import React from 'react'
import { Helmet } from 'react-helmet-async'
import LeftPart from '../../components/HomeComponents/LeftPart'

const Home = () => {

  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
      <div className=' mx-20 grid grid-cols-[1fr,3fr,1fr] mt-10'>
        <div>
          <LeftPart/>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </>
  )
}

export default Home