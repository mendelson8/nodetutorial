import React from 'react'
import "./about.css"
import {malpa1,malpa2} from "../../images"
const About = () => {
  return (
    <div className="about-body">
      <div className='about-heading'>Kim jesteśmy?</div>
      <div className='about-person'>
        <div className='julek'><img src={malpa2}/> <br />Juliusz Frankiewicz <br /> <div className='opis'>jakis tam laureat</div></div>
        <div className='mendel'><img src={malpa1}/> <br /> Jakub Mendel <br /> <div className='opis'>dzwiga caly ten projekt na barkach</div></div>
      </div>
    </div>
  )
}

export default About