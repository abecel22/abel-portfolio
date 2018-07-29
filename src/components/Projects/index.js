import React from 'react'

import campDash from './../../assets/images/projects/campDash.png'
import camp from './../../assets/images/projects/camp.png'
import dashboard from './../../assets/images/projects/dashboard.png'
import quote from './../../assets/images/projects/quote.png'
import weather from './../../assets/images/projects/weather.png'
import wiki from './../../assets/images/projects/wiki.png'

import './style.scss'

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-grid">
        <div>
          <a href="https://abecel22.github.io/costa-admin/">
            <img src={dashboard} className="projects-row__image" />
          </a>
          <h4>Costa-Admin</h4>
          <p>
            A mock employee admin panel. Angular 6, Angular Material, and
            TypeScript.
          </p>
        </div>

        <div>
          <a href="http://costa-yelp-camp.herokuapp.com/">
            <img src={camp} className="projects-row__image" />
          </a>
          <h4>YelpCamp</h4>
          <p>
            Learn about, add, and review campgrounds! JS, Express, and MongoDB.
          </p>
        </div>

        <div>
          <a href="http://camp-dash.surge.sh/">
            <img src={campDash} className="projects-row__image" />
          </a>
          <h4>CampDash</h4>
          <p>
            New tab Chrome Extension clone of Momentum. jQuery, SCSS, and APIs.
          </p>
        </div>

        <div>
          <a href="http://costa-wiki.surge.sh/">
            <img src={wiki} className="projects-row__image" />
          </a>
          <h4>Wikipedia Viewer</h4>
          <p>
            Learn about anything through this Wikipedia viewer. React, SCSS, and
            Gatsby SSG.
          </p>
        </div>

        <div>
          <a href="https://costa-weather.surge.sh/">
            <img src={weather} className="projects-row__image" />
          </a>
          <h4>Costa Weather</h4>
          <p>Weather app! Weather Underground API and jQuery.</p>
        </div>

        <div>
          <a href="https://costa-quotes.surge.sh/">
            <img src={quote} className="projects-row__image" />
          </a>
          <h4>Quote Generator</h4>
          <p>Generate an uplifting quote on demand! JS, AJAX, and CSS.</p>
        </div>
      </div>
    )
  }
}

export default Projects
