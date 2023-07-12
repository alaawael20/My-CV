import React from 'react'
import './style.css'

const Education = () => {
    return (
        <div className='education'>
            <h3>Education</h3>
            <div>
                <div className='duration'>
                    <span></span>
                    <p>2019</p>
                </div>
                <div className='description'>
                    <p>High School</p>
                    <p>Muhammad Al-Najjar School, Khan Younes</p>
                    <p>I graduated from school with good grade.</p>
                </div>
            </div>
            <div>
                <div className='duration'>
                    <span></span>
                    <p>2019 - present</p>
                </div>
                <div className='description'>
                    <p>BACHELOR'S IN SOFTWARE ENGINEERING</p>
                    <p>Al-Azhar University, Gaza</p>
                    <p>Software engineering at Al-Azhar University</p>
                </div>
            </div>
        </div>
    )
}

export default Education
