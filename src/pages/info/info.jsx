import React from 'react';
import './info.css'

const Info = () => {
  return (
    <div id='infoPage'>
      <div>
        <div id ='video'>
        <iframe width="100%" height='600px' src="https://www.youtube.com/embed/WeyLEe1T0yo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
        </div>
        <div className='infoTextDiv'>
          Hostile architecture, also known as defensive design, is an urban planning strategy implemented to influence human behaviors in public spaces. This site serves as a crowd-sourced repository for these practices.
        </div>
        <div id='resources'>
          <div>
            Learn more about hostile architecture: 
          </div>
          <ul>
          <a href="https://hostiledesign.org/" target="_blank" rel="noreferrer">
              <li>Hostile Design ↗</li>
            </a>
            <a href="https://www.nytimes.com/2019/11/08/nyregion/hostile-architecture-nyc.html" target="_blank" rel="noreferrer">
              <li>‘Hostile Architecture’: How Public Spaces Keep the Public Out ↗</li>
            </a>
            <a href="https://99percentinvisible.org/episode/unpleasant-design-hostile-urban-architecture/" target="_blank" rel="noreferrer">
              <li>99% Invisible - Unpleasant Design & Hostile Urban Architecture ↗</li>
            </a>
          </ul>
        </div>      
      </div>
    </div>
  );
};

export default Info;