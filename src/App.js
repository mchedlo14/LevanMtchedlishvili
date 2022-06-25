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


const App = () => {
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])

  return (
    <BrowserRouter>
      <div>
        {
          loading === true ?
         <div className='loader'><PropagateLoader size={20} color={"#25292E"} loading={loading}/></div>
          :
          <>
            <NavbarComp />
            <Routes>
              <Route path='/' exact element={<Home />}/>
              <Route path='/about' element={<About />}/>
            </Routes>
            <Footer />
          </>
        }

      </div>
    </BrowserRouter>
  )
}

export default App