import React, { useState } from 'react'
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../../../firebaseConfig'

const List = () => {

  const [images, setImages] = useState([])

  const handleFetchListImageStorage = async () => {
    setImages([])
    const listRef = ref(storage, 'images')
    const { items } = await listAll(listRef)
    items.forEach(async (i) => {
      const pathReference = ref(storage, i.fullPath);
      const imageUrl = await getDownloadURL(pathReference)
      setImages(oldImages => [...oldImages, imageUrl])
    })
  }

  return (
    <div>
      <h1 className='text-2xl'>List</h1>
      <button className='border-2 border-sky-400 px-4 py-1' onClick={handleFetchListImageStorage}>Fetch List Image Storage</button>
      {images.map(i => <div key={i}><img className='w-20 h-20' src={i} alt={i} /></div>)}
    </div>
  )
}

export default List