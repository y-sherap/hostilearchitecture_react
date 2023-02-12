import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Post from '../Post/Post';
import './posts.css'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get('https://hostilearchitecture-backend.herokuapp.com/posts/all')
      setPosts(res.data)
    }
    getPosts()
  }, [])

  return (
    <div id='postsContainer'>
      {posts.map((post, index) => (
        <Post 
          post={post}
          key={index}
        />
      ))}
    </div>
  );
};

export default Posts;