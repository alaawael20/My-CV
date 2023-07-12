import React from 'react'
import './style.css'

const Certificates = () => {
    return (
        <div className='certificates'>
            <h3>Certificates</h3>
            <div>
                <div className='duration'>
                    <span></span>
                    <p>2021</p>
                </div>
                <div className='description'>
                    <p>Responsive Web Design</p>
                    <p>freeCodeCamp</p>
                </div>
            </div>
            <div>
                <div className='duration'>
                    <span></span>
                    <p>2022</p>
                </div>
                <div className='description'>
                    <p>Graphic Design</p>
                    <p>Edrak for Training and Development</p>
                </div>
            </div>
        </div>
    )
}

export default Certificates
