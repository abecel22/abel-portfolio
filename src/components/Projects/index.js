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
          <a href="http://geckofit.surge.sh/">
            <img src={gecko} className="projects-row__image" />
          </a>
          <h4>GeckoFit</h4>
          <p>
            A nutrition planning app built with a remote team! React, ES6, and
            CSS.
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
        <div>
          <a href="https://js-drumkit-aa.surge.sh/">
            <img src={drums} className="projects-row__image" />
          </a>
          <h4>JS Drum Kit</h4>
          <p>Jam out on this online Drum Kit! Vanilla JS and ES6.</p>
        </div>
      </div>
    )
  }
}

export default Projects
