import React from 'react';
import Posts from '../../components/Posts/Posts';
import './home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  const goToTop = () => {
    navigate('/#top')
  }
  return (
    <div id="homePage">
      <div>
      <Posts />
      </div>
      <div id="top-nav">
        <a href='/#top' onClick={goToTop}
        >back to top</a>

      </div>
    </div>
  );
};

export default Home;