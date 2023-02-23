import React, { Component } from "react";
import FeaturedArticles from "../subheading/featuredArticles";
import LatestArticle from "../subheading/latestArticle";
import LatestStories from "../subheading/latestStories";
import featuredJSON from "./../../../src/featured.json";
import latestArtJSON from "./../../../src/latestArticles.json";
import TopPostsJSON from "./../../../src/TopPosts.json";

export default class HomeContainer extends Component {
  state = {
    details: featuredJSON,
    details2: latestArtJSON,
    details3: TopPostsJSON,
  };

  
  render() {
    return (
      <>
        <div className="container">
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child">
            <h3 className="title">Title of vertical gallery</h3>
            <p className="date">Travel/ August 21 2017</p>
          </div>
          <div className="child2">
            <h3 className="title">The SOund cloud you loved is doomed</h3>
            <p className="date">Travel / August 21 2017</p>
          </div>
          <div className="child3">
            <h3 className="title">The Sound cloud you loved is doomed</h3>
            <p className="date">Travel / August 21 2017</p>
          </div>
        </div>

        <span className="The">The</span>
        <span className="latest">latest</span>

        <FeaturedArticles det={this.state.details} />
        <span className="The2">The</span>
        <span className="latest2">Latest Article</span>

        <LatestArticle det2={this.state.details2} det3={this.state.details3} />

        <h2 className="The3">Latest</h2>
        <h2 className="latest3">Stories</h2>
       
    <div className='latest-stories4'>
      <LatestStories det2={this.state.details} />
      </div>
      </>
    );
  }
}
