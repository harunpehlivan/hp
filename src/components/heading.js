import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './heading.module.css'

const Heading = (props) => {
  return (
    <div className={styles.container}>
      <img alt="image" src="/playground_assets/favicon-1200h.png" className={styles.image} />
      <h1 className={` ${projectStyles.heading} ${styles.text} `}>{props.heading1}</h1>
      <span className={` ${projectStyles.subheading} ${styles.text1} `}>{props.text}</span>
    </div>
  )
}

Heading.defaultProps = {
  heading1: 'HARUN PEHLİVAN',
  text: 'FOUNDER CEO',
}

Heading.propTypes = {
  heading1: PropTypes.string,
  text: PropTypes.string,
}

export default Heading
