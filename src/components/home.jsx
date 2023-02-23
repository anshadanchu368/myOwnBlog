import React, { useState } from 'react'
import Categories from './categories';
import HomeContainer from './containers/HomeContainer'
import Heading from './Heading';
import HamburgerMenu from 'react-hamburger-menu';

function Home() {

  const [isOpen,setIsOpen]= useState(false);

  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }
  
  return (
    <>
    <div className="hamburger-icon">

    <HamburgerMenu
      isOpen={isOpen}
      menuClicked={handleClick}
      width={18}
      height={15}
      strokeWidth={2}
      rotate={0}
      color="#000000"
      borderRadius={0}
      animationDuration={0.5}
    />

    </div>
     {isOpen && (
        <div>
          <Categories/>
        </div>
      )}
     
  <Heading/>

     <HomeContainer/>
    

     

      
    </>
  )
}

export default Home
