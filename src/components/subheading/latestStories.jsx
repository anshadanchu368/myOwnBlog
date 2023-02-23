import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function LatestStories(props) {
  const [show,setShow]=useState(false);

  const handle =()=>{
    setShow(true);
  }
  return (
         <div className="item5">
            {props.det2.map((item)=>{
                return(
                    
                    <div key={item.id} onClick={handle} className="last-container">
                    <p className="title9" > {item.title}</p>
                    <p className="desc9" > {item.para}</p>
                    <p className="date9" > {item.date}</p>
                    <p style={{position:"relative",top:"5rem",left:"3rem"}}>{show && <Link to='/article'>Show more</Link>}</p>
                    </div>
                   
                )
            })}
         </div>
        
    
  )
}

export default LatestStories
