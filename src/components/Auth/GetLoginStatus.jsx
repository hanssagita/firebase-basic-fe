import React from 'react'
import { auth } from '../../utils/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";

const GetLoginStatus = () => {

  const handleCheckStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        window.alert(`Still login with: ${user.email}`)
      } else {
        window.alert(`You are not login yet`)
      }
    });
  }

  return (
    <div>
      <h1 className='text-2xl'>GetLoginStatus</h1>
      <button onClick={handleCheckStatus} className='border-2 border-sky-400 px-4 py-1'>Check Status</button>
    </div>
  )
}

export default GetLoginStatus