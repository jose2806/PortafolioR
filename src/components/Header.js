import React from 'react';
import '../styles/Header.css';

const Header = () =>{
  return(
    <header className='navbar'>
      <nav>
      <ul>
          <li><a href='#start'>Start</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#technologies'>Technologies</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;