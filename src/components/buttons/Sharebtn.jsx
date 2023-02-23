import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebook,  FaInstagram, FaYoutube } from "react-icons/fa";

function Sharebtn() {
    const shareUrl = 'https://example.com';
    const title = '5 ways to animate a react app';

    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const instaShareUrl = `https://www.instagram.com/shareArticle?mini=true&url=${shareUrl}&title=${title}`;
  const youtubeShareUrl = `https://www.youtube.com/shareArticle?mini=true&url=${shareUrl}&title=${title}`;

  return (
    <div>
       <Link to ={twitterShareUrl} target='_blank' rel='noopener noreferer'/>
       <FaTwitter/>
       <Link to ={facebookShareUrl} target='_blank' rel='noopener noreferer'/>
       <FaFacebook/>
       <Link to ={instaShareUrl} target='_blank' rel='noopener noreferer'/>
       <FaInstagram/>
       <Link to ={youtubeShareUrl} target='_blank' rel='noopener noreferer'/>
       <FaYoutube/>
    </div>
  )
}

export default Sharebtn
