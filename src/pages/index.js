import React from 'react'
import Link from 'gatsby-link'
import Skills from '../components/Skills/index'
import Projects from '../components/Projects/index'
import RightSidebar from '../components/RightSidebar/index'

import './style.scss'

const IndexPage = () => (
  <div className="container">
    <div className="left__div">
      <p className="typewriter title">Hello, my name is Abel Acosta!</p>
      <h3>
        I'm a front end developer. My skills are broad: from design, front end,
        and back end development. I enjoy every aspect of it, and I love
        building responsive websites from start to finish.
      </h3>
      <Skills />
      <h2 className="projects__title">Projects</h2>
      <Projects />
    </div>
    <div className="right__div">
      <RightSidebar />
    </div>
  </div>
)

export default IndexPage
