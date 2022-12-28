import React, { useState } from 'react'
import { db } from '../../../firebaseConfig'
import { doc, deleteDoc } from "firebase/firestore";
import SimpleInput from '../../hooks/SimpleInput';

const Delete = () => {

  const [id, setId] = useState('')

  const handleDelete = async (e) => {
    e.preventDefault()
    await deleteDoc(doc(db, "persons", id));
    window.alert(`success delete with id: ${id}`)
  }

  return (
    <div>
      <h1 className='text-2xl'>Delete</h1>
      <form onSubmit={handleDelete}>
        <SimpleInput setValue={setId} placeholder="Deleted Item Id" />
        <button type='submit' className='border-2 border-sky-400 px-4 py-1'>submit</button>
      </form>
    </div>
  )
}

export default Delete