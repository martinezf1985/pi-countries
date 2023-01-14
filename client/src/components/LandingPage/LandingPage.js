import React from 'react'
import './landing.css'
import {Link} from 'react-router-dom';

const LandingPage = () => {
  return(
    <div className = 'landing' >
      <h1 className = '' >🌎Actividades turisticas por el mundo🌎</h1>
     
        <Link to ='/home'>
            <button >Ingresar</button> 
        </Link>   
    </div>
)
}

export default LandingPage