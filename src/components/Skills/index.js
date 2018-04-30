import React from 'react'

import './style.scss'

class Skills extends React.Component {
  render() {
    return (
      <div>
        <h2 className="skills">What I Do</h2>
        <div className="skillsDiv">
          <div className="fb">
            <h4>Front End</h4>
            <p>JavaScript, CSS3, HTML5, React</p>
          </div>
          <div className="fb">
            <h4>Back End</h4>
            <p>NodeJS, Express, APIs, MongoDB</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
