import React from 'react'
import Add from './Add'
import Read from './Read'

const Database = () => {
  return (
    <div>
      <h1 className='text-3xl'>Realtime Database Basic</h1>
      <Add />
      <Read />
    </div>
  )
}

export default Database