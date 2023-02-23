import React from 'react'

function Bollypost(props) {
  return (
    <div className='bo33'>
        {props.art2.map((art)=>{
            return(
                <div className='bol33' key={art.id}>
                    <img src={art.image} alt="" className='img33'/>
                    <h3 className='title33'>{art.title}</h3>
                     <p className="desc33">{art.desc}</p>
                     <p className="date33">{art.Date}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Bollypost
