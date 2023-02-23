import React from 'react'

function More(props) {
  return (
    <>
      {props.det.map((item)=>{
        return(
            <div className ='more-container'>
               <img src={item.image} alt=""  className='image10'/>
                <h3 className="title77">{item.title}</h3>
                <img src='../../images/prsn1.png' alt='error' className='image11'></img>
                <h4 className="name333">Dmitry Nozhenko</h4>
                <p className="para333">AAug 10-4 min read</p>
            </div>
        )
      })}
    </>
  )
}

export default More
