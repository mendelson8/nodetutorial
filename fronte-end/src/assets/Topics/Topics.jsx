import React, { useState } from 'react'
import "./Topics.css"
import {debil1,debil2} from "../../images/index"



const topics = () => {

  const [imagec, setimage] = useState(debil1);


const chand = () => {
  setimage(debil2) // Set the image to debil2 on hover
};
const chand2 = () => {
  setimage(debil1) // Set the image to debil2 on hover
};
  return (
    <div className='wrappertopics'>
        <div className='topicsname'>What will you learn?</div>
        <ul>
            <li className='lista' onMouseEnter={chand}>What are frequencies</li>
            <li className='lista' onMouseEnter={chand2}>What are frequencies</li>
            <li className='lista' onMouseEnter={chand}>What are frequencies</li>
            <li className='lista' onMouseEnter={chand2}>What are frequencies</li>
            <li className='lista' onMouseEnter={chand}>What are frequencies</li>
        </ul>
      <div className='obraz'><img src={imagec}/></div>
    </div>
  )
}

export default topics