import React, { useState } from 'react'
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../../firebaseConfig'

const Upload = () => {

  const [file, setFile] = useState(null)

  const handleUpload = async (e) => {
    e.preventDefault()
    const imageRef = ref(storage, `images/${file.name}`)
    try {
      const uploadTask = await uploadBytesResumable(imageRef, file)
      console.log(uploadTask)
      if (uploadTask.state === 'success') {
        window.alert('success upload')
      }
    } catch (e) {
      window.alert('something when wrong')
    }

  }
  return (
    <div>
      <h1 className='text-2xl'>Upload</h1>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button className='border-2 border-sky-400 px-4 py-1' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Upload