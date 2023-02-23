import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function TopPosts(props) {
  const [show,setShow]=useState(false)

  const handle=()=>{
    setShow(true)
  }
  return (
    <div  onClick={handle} className='small-container4'>
       <>      
              

                <img src={props.det3.image} alt="error"  className='img7'/>
                <h1 className="id">{props.det3.id}</h1>
                <p className="title7">{props.det3.title}</p>
                <p className="date7">{props.det3.Date}</p>
                <p>{show && <Link to='/article'>Show more..</Link>}</p>
                </>
    </div>

  )
}

export default TopPosts
