import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='main-about-container'>
      <div className='about-container'>
        <div className='image-container'>
          <img src='/images/lm.jpg' className='my-image'/>
        </div>
        <h2 className='about-job'>Junior Front End Developer</h2>
        <p className='about-text'>I am Levan Mchedlishvili,Front End Developer developer.I was born on January 12, 2000.I have a secondary education and now I am studying at the Faculty of It at the University.I try to learn something new in Front End every day.In this portfolio you can see some of my projects.</p>
        <h2 className='about-skills'>Skills</h2>
        <div>
          <p className='skills'><span>Programing skills</span> HTML, CSS, SASS, JAVASCRIPT, jQuery, React,Python(Data Engineer), MySQL</p>
          <p className='skills'><span>Graphical programs</span> Adobe illustrator, Adobe XD, Figma</p>
          <p className='skills'><span>Languages</span> Georgian, English B1, Russian A2</p>
        </div>
      </div>

      <div className='work-experience-container'>
        <h2>Work Experience</h2>
        <p className='startup-text'>A startup that helps you find a pet caregiver and also
            a job opportunity to babysit pets. programs used:
            HTML, CSS, JS</p>
      </div>


      <div className='non-formal-education'>
        <h2>Non Formal Education</h2>
        <p>W3schools, FreeCodeCamp, Frontend Mentor, Udemy, Edabit, Codewars</p>
      </div>
    </div>
  )
}

export default About