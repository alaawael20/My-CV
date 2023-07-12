import React from 'react'
import './style.css'
import Name from './../Name/index';
import About from '../About';
import Education from '../Education';
import Projects from '../Projects';
import Certificates from '../Certificates';

const RightSide = () => {
  return (
    <div className='rightSide '>
      <Name FullName='Alaa Wael El-faqawi' SubName='Web Developer || Front-end Developer'/>
      <About />
      <Education />
      <Projects />
      <Certificates />
    </div>
  )
}

export default RightSide
