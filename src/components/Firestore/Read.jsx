import React, { useState } from 'react'
import { db } from '../../../firebaseConfig'
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'

const Read = () => {

  const [singleData, setSingleData] = useState({})
  const [multipleData, setMultipleData] = useState([])

  const handleFetchSingleData = async () => {
    const docRef = doc(db, 'persons', 'hans')
    const docSnap = await getDoc(docRef)
    console.log(docSnap.data())
    setSingleData(docSnap.data())
  }

  const handleFetchAllData = async () => {
    const querySnapshot = await getDocs(collection(db, 'persons'))
    const data = []
    querySnapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data()
      })
    })
    console.log(data)
    setMultipleData(data)
  }

  return (
    <div className='flex flex-col w-32 space-y-3'>
      <h1 className='text-2xl'>Read</h1>
      <button type='submit' className='border-2 border-sky-400 px-4 py-1' onClick={handleFetchSingleData}>Fetch Single Data</button>
      <div>{singleData.name}</div>
      <button type='submit' className='border-2 border-sky-400 px-4 py-1' onClick={handleFetchAllData}>Fetch All Data</button>
      <div>{multipleData.map(d => {
        return (
          <div key={d.id}>{d.id} -- {d.name}</div>
        )
      })}</div>
    </div>
  )
}

export default Read