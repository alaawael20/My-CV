import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h3>Contact</h3>
      <div className='links'>
        <div><i class="fas fa-home"><span>Khan Younes</span></i></div>
        <div><i class="fas fa-phone"><span>+970598194288</span></i></div>
        <a href="mailto:alaaelfaqawi2001@gmail.com"><i class="fas fa-envelope"><span>alaaelfaqawi2001@gmail.com</span></i></a>
        <a href='https://www.linkedin.com/in/alaa-el-faqawi-a4b866225/'><i class="fab fa-linkedin-in"><span>Alaa El-faqawi</span></i></a>
        <a href='https://twitter.com/AlaaElfaqawi'><i class="fab fa-twitter"><span>@AlaaElfaqawi</span></i></a>
        <a href='https://www.facebook.com/alaa.wael.1460/'><i class="fab fa-facebook-f"><span>Alaa Wael EL-faqawi</span></i></a>
        <a href='https://github.com/alaawael20'><i class="fab fa-github"><span>alaa.elfaqawi</span></i></a>
      </div>
    </div>
  )
}

export default Contact
