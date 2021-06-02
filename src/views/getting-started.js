import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import projectStyles from '../style.module.css'
import styles from './getting-started.module.css'

const GettingStarted = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Studio Intro</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="Studio Intro" />
        <meta property="og:description" content="HARUN PEHLİVAN" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/26b81a0d-2735-4001-b91b-6a42913a9f3d/9c0e1fcb-1eb3-45ae-8b20-af1a4955c9c4?org_if_sml=1"
        />
      </Helmet>
      <div className={styles.container1}>
        <Heading heading1="HARUN PEHLİVAN"></Heading>
        <div className={styles.ul}>
          <ListItem></ListItem>
          <ListItem text="Your progress is saved automatically"></ListItem>
          <ListItem text="Don't worry if you make mistakes. Just undo with Ctrl/Cmd + Z"></ListItem>
        </div>
        <div className={styles.footer}>
          <span className={` ${projectStyles.subheading} ${styles.text} `}>
            Let&apos;s do this!
          </span>
          <Link to="/adding-elements" className={styles.navlink}>
            <div className={` ${projectStyles.thqLink} ${styles.container2} `}>
              <Tip></Tip>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GettingStarted
