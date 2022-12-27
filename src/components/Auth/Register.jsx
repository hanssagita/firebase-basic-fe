import React, { useState } from 'react'
import { auth } from '../../utils/firebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";
import SimpleInput from '../../hooks/SimpleInput';

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      window.alert(`success Creating With User email: ${user.email}`)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
      window.alert(`Error: ${errorCode} - ${errorMessage}`)
    });
  }

  return (
    <div>
      <h1 className='text-2xl'>Register</h1>
      <form onSubmit={handleRegister} className="flex space-x-4">
        <SimpleInput setValue={setEmail} placeholder="email" />
        <SimpleInput setValue={setPassword} placeholder="password" />
        <button type='submit' className='border-2 border-sky-400 px-4 py-1'>Submit</button>
      </form>
    </div>
  )
}

export default Register