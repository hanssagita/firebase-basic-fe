import React, { useState, useEffect } from 'react'
import { database } from '../../../firebaseConfig'
import { ref, onValue } from 'firebase/database'

const Read = () => {

  const [data, setData] = useState(null)

  const databaseConnectionInit = () => {
    const messageRef = ref(database, 'message/')
    onValue(messageRef, (snapshot) => {
      const data = snapshot.val()
      setData(data)
    })
  }

  useEffect(() => {
    databaseConnectionInit()
  }, [])

  return (
    <div className='flex flex-col w-32 space-y-3'>
      <h1 className='text-2xl'>Read</h1>
        {data}
    </div>
  )
}

export default Read