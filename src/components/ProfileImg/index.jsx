import React from 'react'
import './style.css'

const ProfileImg = ({profileImg}) => {
  return (
    <div className='profileImg'>
      <img src={profileImg} alt='ProfileImg'/>
    </div>
  )
}

export default ProfileImg
