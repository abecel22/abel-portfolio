import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid/'

import './style.scss'

class RightSidebar extends React.Component {
  render() {
    return (
      <div className="sidebar__container">
        <div className="profile__container">
          <div className="profile__image" />
          <p className="profile__bio">
            I am a technolgy enthusiast. My love for building software started
            with my Android. My curiosity was sparked as I challenged myself to
            build an app for my Android. I learned Java and successfully built 3
            simple apps.
          </p>
          <p className="profile__bio">
            I then learned about Javascript. After I realized all that
            Javascript could offer, I was hooked! Currently, I spend my time
            building new sites, practicing new algorithms on Codewars, and
            collaborating with a remote team on team dev projects (through
            Chingu Cohorts).
          </p>
        </div>
        <div className="bottom__links">
          <div className="icons">
            <FontAwesomeIcon
              className="fa-2x"
              icon={['fab', 'github-square']}
            />
            <FontAwesomeIcon className="fa-2x" icon={['fab', 'linkedin']} />
            <FontAwesomeIcon
              className="fa-2x"
              icon={['fab', 'twitter-square']}
            />
            <FontAwesomeIcon
              className="fa-2x"
              icon={['fas', 'envelope-square']}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default RightSidebar
