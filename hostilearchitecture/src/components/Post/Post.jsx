import React from 'react';
import './post.css'
import { useState } from 'react';

const Post = ({post, index}) => {

  
  return (
    <div id="postContainer" key={index} >
        <img id='postImage'src={post.image} alt="mountain"  />
        <div className="imageOverlay">
          <div id='postCityCountry'> 
            {post.city}, {post.country}
          </div>
        <div id="homeOfferOnHover">
          <div id="postDate">
            <p>{post.createdAt}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Post;
