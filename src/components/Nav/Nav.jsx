import React from 'react';
import { Link } from 'react-router-dom' 
import './nav.css'

const Nav = () => {
  return (
    <nav id='navContainer'>
      <div id='navLeft'>
        <Link to="/">⌹
        </Link>
      </div>
      <div id='navRight'>
        <div id='postLink'>
          <button id='nav-button'><Link to='/post'>Post</Link>
          </button>
        </div>
        <div id='aboutLink'>
          <button id='nav-button'><Link to ='/info'>Info</Link></button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;