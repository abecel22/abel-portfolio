import React from 'react'

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
          <p>Links go here</p>
        </div>
      </div>
    )
  }
}

export default RightSidebar
