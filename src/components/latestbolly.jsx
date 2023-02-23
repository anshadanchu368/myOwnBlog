import React from 'react'

function Latestbolly(props) {
  return (
    <div className='bolly-container'>
        {props.art.map((art)=>{
            return(
                <div className='sm' key={art.id}>
                  <img src={art.image} alt="error" className='img55' />
                  <h3 className="title55">{art.title}</h3>
                  <p className="desc55">{art.desc}</p>
                  <p className="date55">{art.date}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Latestbolly
