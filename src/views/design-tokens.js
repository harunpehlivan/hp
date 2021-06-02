import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import projectStyles from '../style.module.css'
import styles from './design-tokens.module.css'

const DesignTokens = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>6 - Design Tokens - Studio Intro</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="6  - Design Tokens - Studio Intro" />
        <meta property="og:description" content="HARUN PEHLİVAN" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/26b81a0d-2735-4001-b91b-6a42913a9f3d/9c0e1fcb-1eb3-45ae-8b20-af1a4955c9c4?org_if_sml=1"
        />
      </Helmet>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <Heading
            text="Set up your design language for a consistent look across your project"
            heading1="Design Tokens"
          ></Heading>
          <div className={styles.ul}>
            <ListItem text="Go to the Design Tokens Panel to see the available text styles, color and layout tokens"></ListItem>
            <Tip text="To see the Design Tokens panel you need to click outside the page, on the dark area"></Tip>
            <ListItem text="Select the button to begin styling it from the Visual Inspector"></ListItem>
            <ListItem text="Try changing the padding and background color using tokens"></ListItem>
            <Tip text="You will see that some inputs support color tokens, others layout tokens and some don't support tokens at all"></Tip>
            <div className={styles.container3}>
              <ListItem text="Go to the Text Style section in the Inspector and link the desired text style token by clicking the icon"></ListItem>
              <div className={styles.container4}>
                <svg viewBox="0 0 1024 1024" className={styles.icon}>
                  <path d="M440.236 635.766c-13.31 0-26.616-5.076-36.77-15.23-95.134-95.136-95.134-249.934 0-345.070l192-192c46.088-46.086 107.36-71.466 172.534-71.466s126.448 25.38 172.536 71.464c95.132 95.136 95.132 249.934 0 345.070l-87.766 87.766c-20.308 20.308-53.23 20.308-73.54 0-20.306-20.306-20.306-53.232 0-73.54l87.766-87.766c54.584-54.586 54.584-143.404 0-197.99-26.442-26.442-61.6-41.004-98.996-41.004s-72.552 14.562-98.996 41.006l-192 191.998c-54.586 54.586-54.586 143.406 0 197.992 20.308 20.306 20.306 53.232 0 73.54-10.15 10.152-23.462 15.23-36.768 15.23z"></path>
                  <path d="M256 1012c-65.176 0-126.45-25.38-172.534-71.464-95.134-95.136-95.134-249.934 0-345.070l87.764-87.764c20.308-20.306 53.234-20.306 73.54 0 20.308 20.306 20.308 53.232 0 73.54l-87.764 87.764c-54.586 54.586-54.586 143.406 0 197.992 26.44 26.44 61.598 41.002 98.994 41.002s72.552-14.562 98.998-41.006l192-191.998c54.584-54.586 54.584-143.406 0-197.992-20.308-20.308-20.306-53.232 0-73.54 20.306-20.306 53.232-20.306 73.54 0.002 95.132 95.134 95.132 249.932 0.002 345.068l-192.002 192c-46.090 46.088-107.364 71.466-172.538 71.466z"></path>
                </svg>
              </div>
            </div>
            <Tip text="From here you can also create new text styles with the currently set properties if you press + "></Tip>
          </div>
          <h2 className={` ${projectStyles.subheading} ${styles.text} `}>Desired Outcome</h2>
          <div className={styles.container5}>
            <button
              className={` ${projectStyles.button} ${projectStyles.thqButton} ${styles.button} `}
            >
              Button
            </button>
          </div>
          <h2 className={` ${projectStyles.subheading} ${styles.text1} `}>Give it a try</h2>
          <div className={styles.container6}>
            <button className={projectStyles.thqButton}>Button</button>
          </div>
        </div>
        <Link to="/building-layouts-navbar" className={styles.navlink}>
          <div className={` ${projectStyles.thqLink} ${styles.container7} `}>
            <Tip></Tip>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DesignTokens
