import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='menubar'>
      <div className='logo'>Alpha<span className='red'>Class</span></div>
      <ul>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Course Details</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Testimonials</a></li>
      </ul>
    </div>
  ) 
};

export default Navbar