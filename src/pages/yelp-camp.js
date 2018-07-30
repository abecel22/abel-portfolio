import React from 'react'
import Link from 'gatsby-link'
import RightSidebar from '../components/RightSidebar/index'
import camp from '../assets/images/projects/camp.png'

export default () => (
  <div className="container">
    <div className="left__div">
      <Link to="/" className="button">
        Back home
      </Link>
      <h2 className="project-details_header">YelpCamp</h2>
      <img src={camp} alt="" className="project-details_image" />
      <p className="project-details_info">
        Learn about, add, and review campgrounds! JS, Express, and MongoDB.
      </p>
      <div className="button-container">
        <a href="http://costa-yelp-camp.herokuapp.com/" className="button">
          Live Demo
        </a>
        <a href="https://github.com/abecel22/CostaYelpCamp" className="button">
          View Code
        </a>
      </div>
    </div>

    <div className="right__div">
      <RightSidebar />
    </div>
  </div>
)
