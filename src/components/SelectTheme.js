import React,{ useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../assets/SelectTheme.css';

const SelectTheme = () => {
    const theme = useContext(ThemeContext);
  return (
    <div className='select-theme-buttons-container'>
      <button className='select-theme-button' onClick={() => theme.setTheme('light')}><i className="fas fa-sun"></i></button>
      <button className='select-theme-button' onClick={() => theme.setTheme('dark')}><i className="fas fa-moon"></i></button>
    </div>
  )
}

export default SelectTheme