import React from 'react'
import Link from 'gatsby-link'
import Projects from '../components/Projects/index'
import RightSidebar from '../components/RightSidebar/index'

import './style.scss'

const IndexPage = () => (
  <div className="container">
    <div className="left__div">
      <p className="typewriter title">Hi, I'm Abel Acosta. I make web apps!</p>
      <h3>
        Front end web developer. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Iusto dolore accusantium perferendis ducimus natus
        aperiam ab, harum, quas nobis veritatis fugit eius atque explicabo, ut
        quaerat dignissimos similique velit ea provident quo.
      </h3>
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
      <h2 className="projects__title">Projects</h2>
      <Projects />
    </div>
    <div className="right__div">
      <RightSidebar />
    </div>
  </div>
)

export default IndexPage
