import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext';
import '../assets/ReactProjects.css'



const ReactProjects = () => {
    const theme = useContext(ThemeContext);


  return (
    <div className='react-projects'>
        <div data-aos="fade-left" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Blog App</h2>
            <p className={`project-description-${theme.theme}`}>This is a website for blogs where you can sign in with Google and access different blogs. You can also read other users' blogs.</p>
            <a href='https://github.com/mchedlo14/blogApp' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>

        <div data-aos="fade-right" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Recourse</h2>
            <p className={`project-description-${theme.theme}`}>Recourse Project. This is a Mg's project.</p>
            <a href='http://recourse.ge/' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>

        <div data-aos="fade-left" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Netflix</h2>
            <p className={`project-description-${theme.theme}`}>Movie app, In this project I used Tailwind, Firebase.</p>
            <a href='https://netflix-rosy-delta.vercel.app/' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>

        <div data-aos="fade-right" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Chat App</h2>
            <p className={`project-description-${theme.theme}`}>Chat App with google authentication</p>
            <a href='https://main--bejewelled-chimera-93f19b.netlify.app/' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>

        <div data-aos="fade-left" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Google Map</h2>
            <p className={`project-description-${theme.theme}`}>In this project you can set two endoint  end get the roadmap and time.</p>
            <a href='https://github.com/mchedlo14/google-map' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-right" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Crypto Web</h2>
            <p className={`project-description-${theme.theme}`}>This is a Crypto Landing page also you can find information about your favorite crypto coin.</p>
            <a href='https://cozy-tartufo-794a95.netlify.app' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-left" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Crypto Currency</h2>
            <p className={`project-description-${theme.theme}`}>This is a website where you can find everything about the price of cryptocurrencies (price, percentage increase, percentage decrease).</p>
            <a href='https://currencydb.netlify.app' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-right" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>User App </h2>
            <p className={`project-description-${theme.theme}`}>This is a mini fullstack website where you can see the information about users.</p>
            <a href='https://github.com/mchedlo14/user-app' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-left" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Weather App</h2>
            <p className={`project-description-${theme.theme}`}>In this project, you can search the country and see the weather temperature.</p>
            <a href='https://weatherappdb.netlify.app/' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-right" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Pc Shop</h2>
            <p className={`project-description-${theme.theme}`}>I used API in this project. In this project You can add your computer or laptop to this project and finally see the created list.</p>
            <a href='https://funny-bubblegum-25ca41.netlify.app' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-left" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Chess Knight</h2>
            <p className={`project-description-${theme.theme}`}>In this project you can registration to the chess competition.</p>
            <a href='https://redberrychess.netlify.app' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-right" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Pass Generator</h2>
            <p className={`project-description-${theme.theme}`}>In this project you can Generate Random password.</p>
            <a href='https://upggen.netlify.app' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-left" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Advice App</h2>
            <p className={`project-description-${theme.theme}`}>do you have a problem? Advice generator will help you.Maybe find a solution.</p>
            <a href='https://uncleroland.netlify.app/' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-right" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Github Users</h2>
            <p className={`project-description-${theme.theme}`}>In this project you can find github users.</p>
            <a href='https://gusers.netlify.app/' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-left" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>ToDo App</h2>
            <p className={`project-description-${theme.theme}`}>ToDo List App is a kind of app that is generally used to maintain our day-to-day tasks or list everything that we have to do.</p>
            <a href='https://tdgoals.netlify.app' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-right" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Movie App</h2>
            <p className={`project-description-${theme.theme}`}>I used API in this project. You can see the list of movies, also You can search for movies.</p>
            <a href='https://movieappimdb.netlify.app' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
    </div>
  )
}

export default ReactProjects