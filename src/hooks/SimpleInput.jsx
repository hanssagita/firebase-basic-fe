import React from 'react'

const SimpleInput = ({ setValue, placeholder }) => {

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  return (
      <input placeholder={placeholder} type="text" onChange={handleChange} />
  )
}

export default SimpleInput