import React from 'react'
import Articles from './articles';

function FeaturedArticles(props) {
  console.log(props);
  
  return (

    <div className='container3'>
      
        {props.det.map(((article)=>{
          return(
            <Articles key={article.id} detail={article}/>
          )
        }))}
     
    </div>
  )
}

export default FeaturedArticles
