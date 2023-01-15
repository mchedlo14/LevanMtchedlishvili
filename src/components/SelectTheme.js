import React,{ useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../assets/SelectTheme.css';

const SelectTheme = () => {
    const theme = useContext(ThemeContext);

    const lightTheme = () => {
      theme.setTheme('light')
    }

    const darkTheme = () => {
      theme.setTheme('dark')
    }
  return (
    <div className='select-theme-buttons-container'>
      <button className='select-theme-button' onClick={lightTheme}><i className="fas fa-sun"></i></button>
      <button className='select-theme-button' onClick={darkTheme}><i className="fas fa-moon"></i></button>
    </div>
  )
}

export default SelectTheme