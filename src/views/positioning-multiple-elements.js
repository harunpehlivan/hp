import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import projectStyles from '../style.module.css'
import styles from './positioning-multiple-elements.module.css'

const PositioningMultipleElements = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>3 - Positioning Multiple Elements - Studio Intro</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="3 - Positioning Multiple Elements - Studio Intro" />
        <meta property="og:description" content="HARUN PEHLİVAN" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/26b81a0d-2735-4001-b91b-6a42913a9f3d/9c0e1fcb-1eb3-45ae-8b20-af1a4955c9c4?org_if_sml=1"
        />
      </Helmet>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <Heading text=" " heading1="Positioning Multiple Elements"></Heading>
          <h2 className={` ${projectStyles.subheading} ${styles.text} `}>Desired Outcome</h2>
          <div className={styles.container3}>
            <img
              alt="image"
              src="https://play.teleporthq.io/static/img/default.png"
              className={styles.image}
            />
            <div className={styles.container4}>
              <h1>Heading</h1>
              <span>Text</span>
            </div>
          </div>
          <div className={styles.ul}>
            <ListItem text="Add an Image (I) in the container below"></ListItem>
            <ListItem text="Drag and drop a Heading (H) next to the image"></ListItem>
            <ListItem text="Drag and drop a Text (T) element below the Heading"></ListItem>
            <ListItem text="See what happens!"></ListItem>
          </div>
          <h2 className={` ${projectStyles.subheading} ${styles.text3} `}>Give it a try</h2>
          <div className={styles.container5}></div>
          <div className={styles.ul1}>
            <ListItem text="We automatically group elements in containers when needed"></ListItem>
            <div className={styles.container6}>
              <ListItem text="Check the Tree View to get a better overview of your page's structure"></ListItem>
              <div className={styles.container7}>
                <svg viewBox="0 0 1024 1024" className={styles.icon}>
                  <path d="M976 768h-16v-208c0-61.756-50.242-112-112-112h-272v-128h16c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48h-160c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h16v128h-272c-61.756 0-112 50.244-112 112v208h-16c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48h-16v-192h256v192h-16c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48h-16v-192h256v192h-16c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48zM192 960h-128v-128h128v128zM576 960h-128v-128h128v128zM448 256v-128h128v128h-128zM960 960h-128v-128h128v128z"></path>
                </svg>
              </div>
            </div>
            <Tip text="Open the Tree View panel by pressing Ctrl/Cmd + 4"></Tip>
          </div>
        </div>
        <Link to="/selecting-elements" className={styles.navlink}>
          <div className={` ${projectStyles.thqLink} ${styles.container8} `}>
            <Tip></Tip>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PositioningMultipleElements
