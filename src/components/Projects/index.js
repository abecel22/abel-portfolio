import React from 'react'
import { project } from '../../pages/projectsInfo'
import Link from 'gatsby-link'

import './style.scss'

class Projects extends React.Component {
  render() {
    return (
      <div id="projects" className="projects-grid">
        {project.map(p => (
          <div>
            <Link to="/costa-admin/">
              <img
                src={require('../../assets/images/projects/' + p.img + '.png')}
                className="projects-row__image"
              />
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
