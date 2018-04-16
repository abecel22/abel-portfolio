import React from 'react'

import campDash from './../../assets/images/projects/CampDash.png'

import './style.scss'

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-row">
        <img src={campDash} className="projects-row__image" />
        <img src={campDash} className="projects-row__image" />
        <img src={campDash} className="projects-row__image" />
      </div>
    )
  }
}

export default Projects
