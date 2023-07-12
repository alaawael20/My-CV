import React from 'react'
import './style.css'

const PersonalInformation = ({Name, Birthdate, Gender, Nationality}) => {
  return (
    <div className='personalInformation'>
      <h3>Personal Information</h3>
      <div>
        <p><span>Name:</span> {Name}</p>
        <p><span>Birthdate:</span> {Birthdate}</p>
        <p><span>Gender:</span> {Gender}</p>
        <p><span>Nationality:</span> {Nationality}</p>
      </div>
    </div>
  )
}

export default PersonalInformation
