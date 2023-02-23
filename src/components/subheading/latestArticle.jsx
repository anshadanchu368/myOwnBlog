import React from 'react'
import UserArticle from '../UserArticle'
import Latest from './latest'
import TopPosts from './TopPosts'

function LatestArticle(props) {
     

 

  return (
    <div className='container2' >
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"><img onClick={UserArticle} src="../../../images/arrow.png" alt="error" className='arrow'/><p className="load">LOAD MORE</p></div>
        <div className="item"  >{props.det2.map((item)=>{
          return(
            <>
            <Latest key={item.id} det2={item}/>
            </>
          )
        })}</div>
 
        <div className="item2"><h3 className='ad'>Advertisement</h3></div>
  
        <div className="item3"></div>
        <div className="item3"></div>
        <div className="item3"></div>
        
        <div className="item3"><h2 className="Top" >Top</h2>
<span className="half">Posts</span>
   {props.det3.map((item)=>{
          
            return(
              <>
                <TopPosts key={item.id} det3={item}/>
              </>
            )
        })}</div>
        <div className="item4"></div>
        <div className="item4"></div>
        <div className="item4"></div>
        <div className="item4"></div>
        <div className="item4"><p className='txt'>Title of vertical gallery </p><p className='august'>August 17 2017</p></div>
    </div>
  )
}

export default LatestArticle
