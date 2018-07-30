import React from 'react'
import Link from 'gatsby-link'
import RightSidebar from '../components/RightSidebar/index'
import quote from '../assets/images/projects/quote.png'

export default () => (
  <div className="container">
    <div className="left__div">
      <Link to="/" className="button">
        Back home
      </Link>
      <h2 className="project-details_header">Quote Generator</h2>
      <img src={quote} alt="" className="project-details_image" />
      <p className="project-details_info">
        Generate an uplifting quote on demand! If you love the quote, tweet it
        out! JavaScript, AJAX, Twitter API, and CSS.
      </p>
      <div className="button-container">
        <a href="https://costa-quotes.surge.sh/" className="button">
          Live Demo
        </a>
        <a
          href="https://github.com/abecel22/RandomQuoteGenerator"
          className="button"
        >
          View Code
        </a>
      </div>
    </div>

    <div className="right__div">
      <RightSidebar />
    </div>
  </div>
)
