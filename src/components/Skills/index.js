import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid/'

import './style.scss'

class Skills extends React.Component {
  render() {
    return (
      <div>
        <h2 className="skills">What I Do</h2>
        <div className="skillsDiv">
          <div className="fb">
            <table>
              <tr>
                <th />
                <th>Front End</th>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon className="fa-2x" icon={['fab', 'js']} />
                </td>
                <td>JavaScript</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon className="fa-2x" icon={['fab', 'react']} />
                </td>
                <td>React</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon className="fa-2x" icon={['fab', 'css3']} />
                </td>
                <td>CSS3</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon className="fa-2x" icon={['fab', 'html5']} />
                </td>
                <td>HTML5</td>
              </tr>
            </table>
          </div>
          <div className="fb">
            <table>
              <tr>
                <th />
                <th>Back End</th>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon className="fa-2x" icon={['fab', 'node']} />
                </td>
                <td>NodeJS</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="fa-2x"
                    icon={['fab', 'node-js']}
                  />
                </td>
                <td>Express</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon className="fa-2x" icon={['fas', 'code']} />
                </td>
                <td>APIs</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="fa-2x"
                    icon={['fas', 'database']}
                  />
                </td>
                <td>MongoDB</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
