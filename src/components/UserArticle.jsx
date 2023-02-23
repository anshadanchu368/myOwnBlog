import React, { Component } from "react";
import Sharebtn from "./buttons/Sharebtn";
import "../../src/user.css";
import Clap from "./buttons/Clap";
import latest from '../latestArticles.json'
import More from "./More";


export default class USerArticle extends Component {
    state={
        det:latest
    }
  render() {
    return (
        <>
        <div className="head">
          <h4 className="t">The</h4>
          <span className="siren3">Siren</span>
          <button className="get-started">Get Started</button>
        </div>
  
        <div className="blog">
        <div className="clap2">
                <Clap/>
            </div>
         
          <div className="contents">
  
          <h2 className="ways">5 ways to animate a React App</h2>
          <div className="profile">
            <img src="../../images/prsn1.png" alt="error" className="image"/>
            <p className="name">Dmitry Nozhenko</p>
            <p className="sub-date">Jan 28 2019 -10 min read </p>
            <span className="btn">
            <Sharebtn  />
  
            </span>
            <img src="../../images/react.png" alt="error" className="image2" />
            <p className="para">Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React. </p>
            <p className="para2">Let’s talk about them</p>
            <img src="../../images/code.png" alt="error" className="img3" />
            <div className="r-j-a">
                <button className="r">React</button>
                <button className="a">Animation</button>
                <button className="j">javascript</button>
                <span className="clap">
                <Clap/>
                  </span> 
            </div>
            <div className="user">
              <img src="../../images/prsn1.png" alt="error" className="img6"/>
              <p className="writtn">WRITTEN BY</p>
              <p className="name2">Dmitry Nozhenko</p>
              <p className="date4">jan 28 2019-10 min read</p>
            </div>
          </div>
          </div>
            <h3 className="text66">More on this article</h3>
          <div className="more">
               <More  det={this.state.det}/>
          </div>
        </div>
      </>
    )
  }
}


