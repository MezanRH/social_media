import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const NotLoggedinUser = () => {
  
  const { userInfo } = useSelector((state)=> state.registration)

  return (
    userInfo ? <Navigate to="/" /> : <Outlet/>
  )
}

export default NotLoggedinUser