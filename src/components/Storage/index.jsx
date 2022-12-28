import React from 'react'
import Upload from './Upload'
import List from './List'

const Storage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Storage</h1>
      <Upload />
      <List />
    </div>
  )
}

export default Storage