import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import projectStyles from '../style.module.css'
import styles from './building-layouts-card-alignment.module.css'

const BuildingLayoutsCardAlignment = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>8 - Building Layouts - Card & Alignment - Studio Intro</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:title"
          content="8 - Building Layouts - Card &amp; Alignment - Studio Intro"
        />
        <meta property="og:description" content="HARUN PEHLİVAN" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/26b81a0d-2735-4001-b91b-6a42913a9f3d/9c0e1fcb-1eb3-45ae-8b20-af1a4955c9c4?org_if_sml=1"
        />
      </Helmet>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <Heading text="Card &amp; Alignment" heading1="Building Layouts"></Heading>
          <h2 className={` ${projectStyles.subheading} ${styles.text} `}>Desired Outcome</h2>
          <div className={styles.container3}>
            <h1 className={styles.text1}>Heading</h1>
            <span className={styles.text2}>
              Lorem ipsum dolor sit amet, ut sed aeque virtute, stet congue legere id quo. Dicam
              virtute scribentur te usu, cum omnium eripuit copiosae ne. An nullam essent fastidii
              eos.
            </span>
            <div className={styles.container4}>
              <button className={projectStyles.thqButton}>No</button>
              <button className={` ${projectStyles.thqButton} ${styles.button1} `}>Yes</button>
            </div>
          </div>
          <div className={styles.ul}>
            <ListItem text="Add the elements you see above using keyboard shortcuts"></ListItem>
            <ListItem text="Change their position to the vertical axis by selecting the parent node and choosing Column in the Layout section "></ListItem>
            <ListItem text="To have the buttons on the same row, simply drag the second one to the right of the first"></ListItem>
            <ListItem text="Set margins on the first three elements"></ListItem>
            <Tip text="Try using the layout tokens we introduced earlier"></Tip>
          </div>
          <h2 className={` ${projectStyles.subheading} ${styles.text3} `}>Give it a try</h2>
          <div className={styles.div}></div>
          <div className={styles.feedback}>
            <span>
              <span>
                How was it so far? Did you find it too easy or hard to follow? We would love to hear
                your feedback. Write us at
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a href="mailto:hello@teleporthq.io?subject=" className={projectStyles.thqLink}>
                <span className={styles.text6}>hello@teleporthq.io</span>
              </a>
              <span className={styles.text7}></span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
        <Link to="/component-props" className={styles.navlink}>
          <div className={` ${projectStyles.thqLink} ${styles.container5} `}>
            <Tip></Tip>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BuildingLayoutsCardAlignment
