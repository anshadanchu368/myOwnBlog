
import React, { Component } from 'react'
import Heading from './components/Heading'
import './App.css'
import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/home'
import Bollywood from './components/Bollywood'
import Food from './components/food'
import Fitness from './components/fitness'
import Hollywood from './components/hollywood'
import Technology from './components/technology'
import LoginSignup from './components/Loginsignup'
import UserArticle from './components/UserArticle'
export default class App extends Component {
  
  render() {
    return (
     <Router>
      
     <Routes>
      <Route path='/' element={<Home/>}/>
   
      <Route path="/" render={({ location }) => location.pathname !== '/article' && <Heading />} />
      
     
      <Route path='/bollywood' element={<Bollywood/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/hollywood' element={<Hollywood/>}/>
      <Route path='/fitness' element={<Fitness/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/loginSignup' element={<LoginSignup/>}/>
      <Route path='/article' element={<UserArticle/>}/>
      
     </Routes>
     </Router>

      
    )
  }
}
