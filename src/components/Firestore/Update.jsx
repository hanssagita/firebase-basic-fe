import React, { useState } from 'react'
import { db } from '../../utils/firebaseConfig'
import { doc, setDoc } from "firebase/firestore"; 
import SimpleInput from '../../hooks/SimpleInput';

const Update = () => {

  const [id, setId] = useState('')
  const [name, setName] = useState('')

  const handleUpdate = async (e) => {
    e.preventDefault()
    await setDoc(doc(db, "persons", id), {
      name: name,
    });
    window.alert('success update new Value')
  }

  return (
    <div>
      <h1 className='text-2xl'>Update</h1>
      <form onSubmit={handleUpdate}>
        <SimpleInput setValue={setId} placeholder="Updated Item Id" />
        <SimpleInput setValue={setName} placeholder="Updated New Name" />
        <button type='submit' className='border-2 border-sky-400 px-4 py-1'>submit</button>
      </form>
    </div>
  )
}

export default Update