import React from 'react'
import Link from 'gatsby-link'
import RightSidebar from '../components/RightSidebar/index'
import campDash from '../assets/images/projects/CampDash.png'

export default () => (
  <div className="container">
    <div className="left__div">
      <Link to="/" className="button">
        Back home
      </Link>
      <h2 className="project-details_header">YelpCamp</h2>
      <img src={campDash} alt="" className="project-details_image" />
      <p className="project-details_info">
        A new tab Chrome extension clone of Momentum. Features include a news
        feed, current weather, and a todo list. Created on the Electron platform
        for demonstration purposes. Desktop version only. jQuery, SCSS, and
        APIs.
      </p>
      <div className="button-container">
        <a href="http://camp-dash.surge.sh/" className="button">
          Live Demo
        </a>
        <a href="https://github.com/abecel22/CampDashApp" className="button">
          View Code
        </a>
      </div>
    </div>

    <div className="right__div">
      <RightSidebar />
    </div>
  </div>
)
