import React,{useContext, useEffect} from 'react'
import './Home.css'
import AOS from "aos";
import "aos/dist/aos.css";
import ReactProjects from './ReactProjects';
import ThemeContext from '../context/ThemeContext';



const Home = () => {
    const theme = useContext(ThemeContext);

        useEffect(() => {
            AOS.init({duration:1000});
            AOS.refresh();
        }, []);
        
  return (
    <div className={`home-component-${theme.theme}`}>
        <div data-aos="zoom-in" className='information-container'>
            <p className='job'>Front End Developer</p>
            <p className={`about-me-${theme.theme}`}>Hello,  my name is Levan Mtchedlishvili</p>
            <p className='details-about-me'>Hey my name is Levan. I'm a Front End Developer.Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.

            This is my portfolio where you can see: projects, cv, contact information, my social accounts.
            A few things about me: I'm creative because I can solve a problem in different ways.I am always energetic and eager to learn new skills.One of my best plus is correct time management.</p>
            <div className='buttons-container'>
                <a href={require("../cv/levan_mtchedlishvili.pdf")} download="Levan Mtchedlishvili CV">
                    <button className='cv-btn'>Download CV</button>
                </a>
                <a href='https://www.linkedin.com/in/levan-mtchedlishvili-32a331222/' target='_blank' rel="noreferrer">
                    <button className='linkedIn-btn'>Linkedin</button>
                </a>
            </div>
        </div>

        <div className='react-title'>
            <h2 className={`react-${theme.theme}`}>React Js Projects</h2>
            <div className='yellow-underline'></div>
        </div>

        <ReactProjects />
    </div>
  )
}

export default Home