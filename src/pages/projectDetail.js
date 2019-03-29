import React from 'react'
import Link from 'gatsby-link'
import RightSidebar from '../components/RightSidebar/index'
import campDash from '../assets/images/projects/campDash.png'
import { project } from './projectsInfo'

export default ({ location }) => (
  <div className="container">
    <div className="left__div">
      <Link to="/" className="button">
        Back home
      </Link>
      <h2 className="project-details_header" />
      <img src={campDash} alt="" className="project-details_image" />
      <p className="project-details_info"> </p>
      <div className="button-container">
        <a href={project.link} className="button">
          Live Demo
        </a>
        <a href={project.githubLink} className="button">
          View Code
        </a>
      </div>
    </div>

    <div className="right__div">
      <RightSidebar />
    </div>
  </div>
)
