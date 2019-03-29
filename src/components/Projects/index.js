import React from 'react'
import { project } from '../../pages/projectsInfo'
import Link from 'gatsby-link'

import campDash from '../../assets/images/projects/campDash.png'
import camp from '../../assets/images/projects/camp.png'
import dashboard from './../../assets/images/projects/dashboard.png'
import quote from './../../assets/images/projects/quote.png'
import weather from './../../assets/images/projects/weather.png'
import wiki from './../../assets/images/projects/wiki.png'

import './style.scss'

class Projects extends React.Component {
  render() {
    return (
      <div id="projects" className="projects-grid">
        {project.map(p => (
          <div>
            <Link to="/costa-admin/">
              <img src={p.img} className="projects-row__image" />
              <h4>{p.name}</h4>
              <p className="projects-row_info">{p.briefIntro}</p>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default Projects
