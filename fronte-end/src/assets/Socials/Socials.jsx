import React from 'react'
import "./Socials.css"
import {fbl} from "../../images"

const Socials = () => {
  return (
    <div className='socials-wrapper'>
         <div className='logo'>Alpha<span className='red'>Class</span></div>
         <div className='fblogo'><img src={fbl} width="50px" height="50px"/></div>
         <div className='designer'>This website was designed by Jakub Mendel 2024</div>
    </div>
    
  )
}

export default Socials