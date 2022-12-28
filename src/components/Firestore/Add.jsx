import React, { useState } from 'react'
import SimpleInput from '../../hooks/SimpleInput'
import { db } from '../../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

const Add = () => {

  const [text, setText] = useState('')

  const handleAdd = async (e) => {
    e.preventDefault()
    await setDoc(doc(db, "persons", text), {
      name: text,
    });
    window.alert('success add new Value')
  }

  return (
    <div>
      <h1 className='text-2xl'>Add</h1>
      <form onSubmit={handleAdd}>
        <SimpleInput setValue={setText} placeholder="add name" />
        <button type='submit' className='border-2 border-sky-400 px-4 py-1'>Submit</button>
      </form>
    </div>
  )
}

export default Add