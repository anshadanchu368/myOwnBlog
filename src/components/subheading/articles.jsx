import React ,{useState} from 'react'
import { Link } from 'react-router-dom';

function Articles(props) {
  const [showArticle,setShowArticle] = useState(false);

  const handleClick =() =>{
    setShowArticle(true);
  }
  return (
    <>
        <div onClick={handleClick}className='small-container'>
              <img src={props.detail.image} alt={props.detail.alt} className="img4"></img>
                <p className="title3">{props.detail.title}</p>
                <p className="para3">{props.detail.para}</p>
                <p className="date2">{props.detail.date}</p>
                <p style={{color:"blue", position:"relative",left:"18rem",textDecoration:"none"}}>{showArticle && <Link to='/article'>show more...</Link>}</p>
            </div>
    </>
  )
}

export default Articles
