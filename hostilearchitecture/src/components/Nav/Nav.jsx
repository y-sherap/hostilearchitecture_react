import React from 'react';
import { Link } from 'react-router-dom' 
import './nav.css'

const Nav = () => {
  return (
    <nav id='navContainer'>
      <div id='navLeft'>
        <Link to="/">Hostile Architecture</Link>
      </div>
      <div id='navRight'>
        <div id='postLink'>
          <Link to='/post'>Post</Link>
        </div>
        <div id='aboutLink'>
          <Link to ='/info'>Info</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;