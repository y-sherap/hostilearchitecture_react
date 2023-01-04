import React from 'react';
import './post.css'

const Post = ({post, index}) => {
  
  return (
    <div id="postContainer" key={index}>
        <img id='postImage'src={post.image} alt="mountain"  />
      <div id='hoverText'>
        <div id='postCityCountry'> 
          {post.city}, {post.country}
        </div>
        <div id='timeStamp'>
          {post.createdAt}
        </div>
        <div>
          {post.description}
        </div>
      </div>

    </div>
  );
};

export default Post;
