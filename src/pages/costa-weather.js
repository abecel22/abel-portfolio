import React from 'react'
import Link from 'gatsby-link'
import RightSidebar from '../components/RightSidebar/index'
import weather from '../assets/images/projects/weather.png'

export default () => (
  <div className="container">
    <div className="left__div">
      <Link to="/" className="button">
        Back home
      </Link>
      <h2 className="project-details_header">Costa Weather</h2>
      <img src={weather} alt="" className="project-details_image" />
      <p className="project-details_info">
        Weather app! Features include local current weather and an autocomplete
        city search. Weather Underground API and jQuery.
      </p>
      <div className="button-container">
        <a href="https://costa-weather.surge.sh/" className="button">
          Live Demo
        </a>
        <a href="https://github.com/abecel22/costa-weather" className="button">
          View Code
        </a>
      </div>
    </div>

    <div className="right__div">
      <RightSidebar />
    </div>
  </div>
)
