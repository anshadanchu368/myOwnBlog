import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Latest(props) {
  const [showArticle,setShowArticle] = useState(false);

  const handleClick =() =>{
    setShowArticle(true);
  }
  return (
    <>
      <div onClick={handleClick} className="small-container2">
      <img src={props.det2.image} alt={props.det2.alt} className='img5' />
              <h3 className="title5">{props.det2.title}</h3>
              <p className="desc">{props.det2.desc}</p>
              <p className="date5">{props.det2.date}</p>
              <p style={{color:"blue", position:"relative",left:"35rem",textDecoration:"none"}}>{showArticle && <Link to='/article'>show more...</Link>}</p>
      </div>
    </>
  )
}

export default Latest
