import React from 'react'
import Link from 'gatsby-link'
import RightSidebar from '../components/RightSidebar/index'
import wiki from '../assets/images/projects/wiki.png'

export default () => (
  <div className="container">
    <div className="left__div">
      <Link to="/" className="button">
        Back home
      </Link>
      <h2 className="project-details_header">Wikipedia Viewer</h2>
      <img src={wiki} alt="" className="project-details_image" />
      <p className="project-details_info">
        Learn about anything through this Wikipedia viewer. Features includes a
        keyterm search and a random article generator. React, SCSS, and Gatsby
        SSG.
      </p>
      <div className="button-container">
        <a href="http://costa-wiki.surge.sh/" className="button">
          Live Demo
        </a>
        <a
          href="https://github.com/abecel22/wikipedia_viewer"
          className="button"
        >
          View Code
        </a>
      </div>
    </div>

    <div className="right__div">
      <RightSidebar />
    </div>
  </div>
)
