import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Post from '../../components/Post/Post';
import './home.css'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get('http://localhost:3001/posts/all')
      setPosts(res.data)
      console.log(res)
    }
    getPosts()
  }, [])
  return (
    <div id='homePage'>
      {posts.map((post, index) => (
        <Post 
          post={post}
          key={index}
        />
      ))}
    </div>
  );
};

export default Home;