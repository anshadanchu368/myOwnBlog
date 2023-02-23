import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../src/hamburger.css'



const Categories = ()=> {
     


    const activestyle={
       textDecoration:'none'
    };

    const linkStyle={
      textDecoration: 'none',
      color:'black'
    };
    return (
      <>
    
    <div className='categoryBox'>
       
       

      <NavLink  to='/' activestyle={activestyle} style={linkStyle}>Home</NavLink>
   
        
          <NavLink to='/bollywood'activestyle={activestyle} style={linkStyle}>Bollywood</NavLink>
        
          <NavLink to='/technology' activestyle={activestyle} style={linkStyle}>technology</NavLink>
        
      
          <NavLink to='/hollywood' activestyle={activestyle} style={linkStyle}>hollywood</NavLink>
        
      
          <NavLink to='/fitness' activestyle={activestyle} style={linkStyle}>Fitness</NavLink>
        
      
          <NavLink to='/food' activestyle={activestyle} style={linkStyle}>food</NavLink>
        
          <NavLink to='/loginSignup' activestyle={activestyle} style={linkStyle}>Login / SignUp</NavLink>
</div>
</>

        
    
      
     
     
  )
}

export default Categories
