import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Login from './pages/login'
import Otp from './pages/otp'
import Home from './pages/Home';
import Profile from './pages/profilesetup';
import Findcpo from './pages/findCpo';
import Mainlayout from './layout/mainlayout'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route element={<Mainlayout/>}>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/find-cpo' element={<Findcpo/>}/></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
