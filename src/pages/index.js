import React from 'react'
import Link from 'gatsby-link'
import Projects from '../components/Projects/index'
import RightSidebar from '../components/RightSidebar/index'

import './style.scss'

const IndexPage = () => (
  <div className="container">
    <div className="left__div">
      <h2>Hi, I'm Abel Acosta</h2>
      <h3>
        Full stack web developer. I make web apps! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Iusto dolore accusantium perferendis
        ducimus natus aperiam ab, harum, quas nobis veritatis fugit eius atque
        explicabo, ut quaerat dignissimos similique velit ea provident quo.
      </h3>
      <h5 className="projects__title">Projects</h5>
      <Projects />
    </div>
    <div className="right__div">
      <RightSidebar />
    </div>
  </div>
)

export default IndexPage
