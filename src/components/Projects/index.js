import React from 'react'

import campDash from './../../assets/images/projects/CampDash.png'

import './style.scss'

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-grid">
        <div>
          <img src={campDash} className="projects-row__image" />
          <h4>Project Name</h4>
          <p>
            This is the short summary for each project. Built on React and
            Express.
          </p>
        </div>
        <div>
          <img src={campDash} className="projects-row__image" />
          <h4>Project Name</h4>
          <p>
            This is the short summary for each project. Built on React and
            Express.
          </p>
        </div>
        <div>
          <img src={campDash} className="projects-row__image" />
          <h4>Project Name</h4>
          <p>
            This is the short summary for each project. Built on React and
            Express.
          </p>
        </div>
        <div>
          <img src={campDash} className="projects-row__image" />
          <h4>Project Name</h4>
          <p>
            This is the short summary for each project. Built on React and
            Express.
          </p>
        </div>
        <div>
          <img src={campDash} className="projects-row__image" />
          <h4>Project Name</h4>
          <p>
            This is the short summary for each project. Built on React and
            Express.
          </p>
        </div>
        <div>
          <img src={campDash} className="projects-row__image" />
          <h4>Project Name</h4>
          <p>
            This is the short summary for each project. Built on React and
            Express.
          </p>
        </div>
      </div>
    )
  }
}

export default Projects
