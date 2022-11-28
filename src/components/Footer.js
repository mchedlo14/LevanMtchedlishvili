import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext';
import '../assets/Footer.css'

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`footer-${theme.theme}`}>
        <div className='social-media-container'>
            <a href='https://github.com/mchedlo14?tab=repositories' target='_blank' rel="noreferrer">
                <i className={`fab fa-github ${theme.theme}`}></i>
            </a>
            <a href='https://www.linkedin.com/in/levan-mtchedlishvili-32a331222/' target='_blank' rel="noreferrer">
                <i className={`fab fa-linkedin-in ${theme.theme}`}></i>
            </a>
            <i className={`fab fa-instagram ${theme.theme}`}></i>
        </div>
        <p className={`copyright-footer-${theme.theme}`}>CopyRight by Levan Mtchedlishvili</p>
        <img src='images/footerimage.png' className='image'/>
    </div>
  )
}

export default Footer