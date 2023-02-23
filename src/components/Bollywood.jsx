import React, { Component } from 'react'
import Latestbolly from './latestbolly'
import  latestjson from '../../src/latestArticles.json'
import TopPosts from '../../src/TopPosts.json';
import Bollypost from './bollypost';
import Heading from './Heading';
export default class Bollywood extends Component {
  state={
    art:latestjson,
    posts:TopPosts
  };
  render() {
    return (
      <>
       <Heading/>
       <div className="bolly-text">
         Bollywood
       </div>
        <Latestbolly  art={this.state.art}/> 
        <div className="bolly-text2">
          Top Posts
        </div>
        <Bollypost art2={this.state.posts}/>

   
      </>
    )
  }
}
