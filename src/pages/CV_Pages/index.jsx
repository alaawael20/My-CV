import React from 'react'
import LeftSide from '../../components/LeftSide'
import RightSide from './../../components/RightSide/index';
import './style.css'

const CVPages = () => {
  return (
    <div className='cVPages'>
      <div><LeftSide /></div>
      <div><RightSide /></div>
    </div>
  )
}

export default CVPages
