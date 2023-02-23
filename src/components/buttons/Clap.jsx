import React, { useState } from 'react'
import '../../user.css'
function Clap() {
    const [clapCount,setClap]=useState(0);

    const handle =()=>{
        setClap(clapCount+1);
    }
  return (
    <div className="clap-button" onClick={handle}>
    <span className="clap-icon">👏</span>
    <span className="clap-count">{clapCount}</span>
  </div>
  )
}

export default Clap
