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
            This is my bio. It will sound amazing when I am done. Many people
            will be amazed.
          </p>
          <p className="profile__bio">
            This is my bio. It will sound amazing when I am done. Many people
            will be amazed.
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
