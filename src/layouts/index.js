import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'normalize.css'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Abel Acosta"
      meta={[
        { name: 'description', content: 'Abel Acosta Porfolio' },
        {
          name: 'keywords',
          content: 'Abel Acosta, Portfolio, Front End Developer',
        },
      ]}
    />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
