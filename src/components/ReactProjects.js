import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext';
import './ReactProjects.css'



const ReactProjects = () => {
    const theme = useContext(   ThemeContext);

  return (
    <div className='react-projects'>
        <div data-aos="fade-right" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>ToDo App</h2>
            <p className={`project-description-${theme.theme}`}>ToDo List App is a kind of app that is generally used to maintain our day-to-day tasks or list everything that we have to do.</p>
            <a href='https://tdgoals.netlify.app' target="_blank" rel="noreferrer">
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
            <h2 className={`project-title-${theme.theme}`}>Advice App</h2>
            <p className={`project-description-${theme.theme}`}>do you have a problem? Advice generator will help you.Maybe find a solution.</p>
            <a href='https://uncleroland.netlify.app/' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-left" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Github Users</h2>
            <p className={`project-description-${theme.theme}`}>In this project you can find github users.</p>
            <a href='https://gusers.netlify.app/' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-right" className='project-container'>
            <h2 className={`project-title-${theme.theme}`}>Weather App</h2>
            <p className={`project-description-${theme.theme}`}>In this project, you can search the country and see the weather temperature.</p>
            <a href='https://sunnyweatherapp.netlify.app' target="_blank" rel="noreferrer">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-left" className='project-container'>
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