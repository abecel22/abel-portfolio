import React from 'react'
import Link from 'gatsby-link'

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
          <Link to="/costa-admin/">
            <img src={dashboard} className="projects-row__image" />
            <h4>Costa-Admin</h4>
            <p>
              A mock employee admin panel. Angular 6, Angular Material, and
              TypeScript.
            </p>
          </Link>
        </div>

        <div>
          <Link to="/yelp-camp/">
            <img src={camp} className="projects-row__image" />
            <h4>YelpCamp</h4>
            <p>
              Learn about, add, and review campgrounds! JS, Express, and
              MongoDB.
            </p>
          </Link>
        </div>

        <div>
          <Link to="/camp-dash/">
            <img src={campDash} className="projects-row__image" />
            <h4>CampDash</h4>
            <p>
              New tab Chrome Extension clone of Momentum. jQuery, SCSS, and
              APIs.
            </p>
          </Link>
        </div>

        <div>
          <Link to="/costa-wiki/">
            <img src={wiki} className="projects-row__image" />
            <h4>Wikipedia Viewer</h4>
            <p>
              Learn about anything through this Wikipedia viewer. React, SCSS,
              and Gatsby SSG.
            </p>
          </Link>
        </div>

        <div>
          <Link to="/costa-weather/">
            <img src={weather} className="projects-row__image" />
            <h4>Costa Weather</h4>
            <p>Weather app! Weather Underground API and jQuery.</p>
          </Link>
        </div>

        <div>
          <Link to="/costa-quotes/">
            <img src={quote} className="projects-row__image" />
            <h4>Quote Generator</h4>
            <p>Generate an uplifting quote on demand! JS, AJAX, and CSS.</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Projects
