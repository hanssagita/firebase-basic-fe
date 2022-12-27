import React, { useState } from 'react'
import { auth } from '../../utils/firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";
import SimpleInput from '../../hooks/SimpleInput';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      window.alert(`success Login With User email: ${user.email}`)
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
      <h1 className='text-2xl'>Login</h1>
      <form onSubmit={handleLogin} className="flex space-x-4">
        <SimpleInput setValue={setEmail} placeholder="email" />
        <SimpleInput setValue={setPassword} placeholder="password" />
        <button type='submit' className='border-2 border-sky-400 px-4 py-1'>Submit</button>
      </form>
    </div>
  )
}

export default Login