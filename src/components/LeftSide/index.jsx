import React from 'react'
import './style.css'
import ProfileImg from '../ProfileImg'
import Name from '../Name'
import PersonalInformation from '../PersonalInformation'
import Skills from '../Skills'
import Contact from '../Contact'
import profileImg from '../assets/profileImg.jpg'

const LeftSide = () => {
  return (
    <div className='leftSide'>
      <ProfileImg profileImg= {profileImg}/>
      <Name FullName='Alaa Wael El-faqawi' SubName='Web Developer'/>
      <PersonalInformation Name='Alaa Wael El-faqawi' Birthdate='24/4/2001' Gender='Male' Nationality='Palestinian'/>
      <Skills />
      <Contact />
    </div>
  )
}

export default LeftSide
