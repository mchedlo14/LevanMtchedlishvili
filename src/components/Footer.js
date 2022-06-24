import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='social-media-container'>
            <a href='https://github.com/mchedlo14?tab=repositories' target='_blank'>
                <i className="fab fa-github"></i>
            </a>
            <a href='https://www.linkedin.com/in/levan-mtchedlishvili-32a331222/' target='_blank'>
                <i className="fab fa-linkedin-in"></i>
            </a>
            <i className="fab fa-instagram"></i>
        </div>
        <p className='copyright-footer'>CopyRight by Levan Mtchedlishvili</p>
        <img src='images/footerimage.png' className='image'/>
    </div>
  )
}

export default Footer