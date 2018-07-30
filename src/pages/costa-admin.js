import React from 'react'
import Link from 'gatsby-link'
import RightSidebar from '../components/RightSidebar/index'
import dashboard from '../assets/images/projects/dashboard.png'

export default () => (
  <div className="container">
    <div className="left__div">
      <Link to="/" className="button">
        Back home
      </Link>
      <h2 className="project-details_header">Costa-Admin</h2>
      <img src={dashboard} alt="" className="project-details_image" />
      <p className="project-details_info">
        A mock employee admin panel. Angular 6, Angular Material, Flex-Layout,
        Chart.js, and TypeScript.
      </p>
      <div className="button-container">
        <a href="https://abecel22.github.io/costa-admin/" className="button">
          Live Demo
        </a>
        <a href="https://github.com/abecel22/costa-admin" className="button">
          View Code
        </a>
      </div>
    </div>

    <div className="right__div">
      <RightSidebar />
    </div>
  </div>
)
