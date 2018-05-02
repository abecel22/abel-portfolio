import React from 'react'
import Link from 'gatsby-link'
import Skills from '../components/Skills/index'
import Projects from '../components/Projects/index'
import RightSidebar from '../components/RightSidebar/index'

import './style.scss'

const IndexPage = () => (
  <div className="container">
    <div className="left__div">
      <p className="typewriter title">Hi, I'm Abel Acosta. I make web apps!</p>
      <h3>
        Front end web developer. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Iusto dolore accusantium perferendis ducimus natus.
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
