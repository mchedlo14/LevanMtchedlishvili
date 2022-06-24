import React from 'react'
import './ReactProjects.css'

const ReactProjects = () => {

  return (
    <div className='react-projects'>
        <div data-aos="fade-right" className='project-container'>
            <h2>ToDo App</h2>
            <p>ToDo List App is a kind of app that is generally used to maintain our day-to-day tasks or list everything that we have to do.</p>
            <a href='https://tdgoal.netlify.app' target="_blank">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-left" className='project-container'>
            <h2>Advice App</h2>
            <p>do you have a problem? Advice generator will help you.Maybe find a solution.</p>
            <a href='https://advicerapp.netlify.app' target="_blank">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-right" className='project-container'>
            <h2>Github Users</h2>
            <p>In this project you can find github users.</p>
            <a href='https://githubusersdb.netlify.app' target="_blank">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-left" className='project-container'>
            <h2>Weather App</h2>
            <p>In this project, you can search the country and see the weather temperature.</p>
            <a href='https://sunnyweatherapp.netlify.app' target="_blank">
                <button className='project-button'>View Project</button>
            </a>
        </div>
        <div data-aos="fade-right" className='project-container'>
            <h2>Movie App</h2>
            <p>I used API in this project. You can see the list of movies, also You can search for movies.</p>
            <a href='https://movieappimdb.netlify.app' target="_blank">
                <button className='project-button'>View Project</button>
            </a>
        </div>
    </div>
  )
}

export default ReactProjects