import React from 'react'
import Register from './Register'
import Login from './Login'
import GetLoginStatus from './GetLoginStatus'

const Auth = () => {
  return (
    <div>
      <h1 className='text-3xl'>Auth Basic</h1>
      <Register />
      <Login />
      <GetLoginStatus />
    </div>
  )
}

export default Auth