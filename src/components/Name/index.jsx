import React from 'react'
import './style.css'

const Name = ({FullName, SubName}) => {
  return (
    <div className='name'>
      <p>{FullName}</p>
      <p>{SubName}</p>
    </div>
  )
}

export default Name
