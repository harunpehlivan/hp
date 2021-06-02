import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import projectStyles from '../style.module.css'
import styles from './positioning-elements.module.css'

const PositioningElements = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>2 - Positioning Elements - Studio Intro</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="2 - Positioning Elements - Studio Intro" />
        <meta property="og:description" content="HARUN PEHLİVAN" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/26b81a0d-2735-4001-b91b-6a42913a9f3d/9c0e1fcb-1eb3-45ae-8b20-af1a4955c9c4?org_if_sml=1"
        />
      </Helmet>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <Heading
            text="Let's see how we position elements in containers"
            heading1="Positioning Elements"
          ></Heading>
          <div className={styles.ul}>
            <ListItem text="Drag and drop a Heading (H) in the box below "></ListItem>
            <ListItem text="Try to place it in another area of the container and see what happens"></ListItem>
          </div>
          <div className={styles.container3}></div>
          <div className={styles.ul1}>
            <ListItem text="You can place your elements to any of these nine points in your containers"></ListItem>
            <Tip text="This option is available only for containers with display flex for the moment"></Tip>
            <ListItem text="Not sure if it's the right position for your element? Just drag and drop it to another point!"></ListItem>
          </div>
        </div>
        <Link to="/positioning-multiple-elements" className={styles.navlink}>
          <div className={` ${projectStyles.thqLink} ${styles.container4} `}>
            <Tip></Tip>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PositioningElements
