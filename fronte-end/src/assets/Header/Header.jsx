import React from 'react';
import "./header.css";
import Navbar from "../navbar/navbar"
const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <Navbar />
        <div className='cta'>
          <p className='coursename'>Sound Design Masterclass</p>
          <h1>Learn the Art of Sound Design</h1>
          <a href="#" className='demo'>Demo Lesson</a>
        </div>
      </div>
    </header>
  )
}

export default Header