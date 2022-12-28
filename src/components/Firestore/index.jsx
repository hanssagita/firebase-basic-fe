import React from 'react'
import Add from './Add'
import Read from './Read'
import Delete from './Delete'
import Update from './Update'

const Firestore = () => {
  return (
    <div>
      <h1 className='text-3xl'>Firestore Basic</h1>
      <Add />
      <Read />
      <Delete />
      <Update />
    </div>
  )
}

export default Firestore