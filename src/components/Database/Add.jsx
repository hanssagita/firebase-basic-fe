import React, { useState } from 'react'
import SimpleInput from '../../hooks/SimpleInput'
import { database } from '../../../firebaseConfig'
import { ref, set } from 'firebase/database'

const Add = () => {

  const [text, setText] = useState('')

  const handleAdd = async (e) => {
    e.preventDefault()
    set(ref(database, 'message/'), text)
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