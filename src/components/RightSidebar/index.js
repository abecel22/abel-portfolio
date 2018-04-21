import React from 'react'

import './style.scss'

class RightSidebar extends React.Component {
  render() {
    return (
      <div className="sidebar__container">
        <div className="profile__container">
          <h5>This is the right side --top</h5>
          <div className="profile__image" />
        </div>
        <div className="bottom__links">
          <p>Links go here</p>
        </div>
      </div>
    )
  }
}

export default RightSidebar
