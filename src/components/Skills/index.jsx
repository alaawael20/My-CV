import React from 'react'
import './style.css'

const Skills = () => {
    return (
        <div className='skills'>
            <h3>Skills</h3>
            <div>
                <div className='skillProg'>
                    <p>HTML/CSS</p>
                    <div class="container">
                        <div class="skill html">90%</div>
                    </div>
                </div>
                <div className='skillProg'>
                    <p>JavaScript</p>
                    <div class="container">
                        <div class="skill js">70%</div>
                    </div>
                </div>
                <div className='skillProg'>
                    <p>BootStarp</p>
                    <div class="container">
                        <div class="skill bootstarp">90%</div>
                    </div>
                </div>
                <div className='skillProg'>
                    <p>SASS</p>
                    <div class="container">
                        <div class="skill sass">40%</div>
                    </div>
                </div>
                <div className='skillProg'>
                    <p>React Js</p>
                    <div class="container">
                        <div class="skill react">30%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
