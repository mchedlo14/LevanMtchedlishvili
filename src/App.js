import React,{useState,useEffect} from 'react'
import Home from './components/Home'
import NavbarComp from './components/NavbarComp'
import About from './components/About'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PropagateLoader } from 'react-spinners';
import Footer from './components/Footer'
import ThemeContext from './context/ThemeContext'
import Timeline from './components/Timeline'



const App = () => {
  const [loading,setLoading] = useState(false)
  const [theme,setTheme] = useState(localStorage.getItem('themeColor') === '' ? 'dark':localStorage.getItem('themeColor'))
  
  useEffect(() => {
    document.title = 'Levan Mtchedlishvili'
    localStorage.getItem('themeColor')
},[])

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])

  return (
    <BrowserRouter>
      <div>
        {
          loading === true ?
         <div className='loader'><PropagateLoader size={20} color={"#25292E"} loading={loading}/></div>
          :
          <>
            <ThemeContext.Provider value={{theme,setTheme}}>
              <NavbarComp />
              <Routes>
                <Route path='/' exact element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/timeline' element={<Timeline />}/>
              </Routes>
              <Footer />
            </ThemeContext.Provider>
          </>
        }

      </div>
    </BrowserRouter>
  )
}

export default App