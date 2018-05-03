import React from 'react'

import campDash from './../../assets/images/projects/campDash.png'
import camp from './../../assets/images/projects/camp.png'
import drums from './../../assets/images/projects/drums.png'
import gecko from './../../assets/images/projects/gecko.png'
import quote from './../../assets/images/projects/quote.png'
import weather from './../../assets/images/projects/weather.png'

import './style.scss'

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-grid">
        <div>
          <img src={gecko} className="projects-row__image" />
          <h4>GeckoFit</h4>
          <p>This is the short summary. Built on React and Express.</p>
        </div>
        <div>
          <img src={campDash} className="projects-row__image" />
          <h4>CampDash</h4>
          <p>This is the short summary. Built on React and Express.</p>
        </div>
        <div>
          <img src={camp} className="projects-row__image" />
          <h4>YelpCamp</h4>
          <p>This is the short summary. Built on React and Express.</p>
        </div>
        <div>
          <img src={weather} className="projects-row__image" />
          <h4>Costa Weather</h4>
          <p>This is the short summary. Built on React and Express.</p>
        </div>
        <div>
          <img src={quote} className="projects-row__image" />
          <h4>Quote Generator</h4>
          <p>This is the short summary. Built on React and Express.</p>
        </div>
        <div>
          <img src={drums} className="projects-row__image" />
          <h4>JS Drum Kit</h4>
          <p>This is the short summary. Built on React and Express.</p>
        </div>
      </div>
    )
  }
}

export default Projects
