import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import projectStyles from '../style.module.css'
import styles from './adding-elements.module.css'

const AddingElements = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>1 - Adding Elements - Studio Intro</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="1 - Adding Elements - Studio Intro" />
        <meta property="og:description" content="HARUN PEHLİVAN" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/26b81a0d-2735-4001-b91b-6a42913a9f3d/9c0e1fcb-1eb3-45ae-8b20-af1a4955c9c4?org_if_sml=1"
        />
      </Helmet>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <Heading
            text="Elements are the building blocks of your projects"
            heading1=" Adding Elements"
          ></Heading>
          <div className={styles.ul}>
            <div className={styles.container3}>
              <ListItem text="Access the Elements tab from the left navigation bar"></ListItem>
              <div className={styles.container4}>
                <svg viewBox="0 0 1024 1024" className={styles.icon}>
                  <path d="M213.333 85.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM213.333 170.667h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM341.333 554.667h128v128c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-128h128c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-128v-128c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v128h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <Tip text="You can also hit Ctrl/Cmd + 1"></Tip>
            <ListItem text="Drag and drop an element in the box underneath"></ListItem>
            <Tip text="You can also add elements by using keyboard shortcuts, so by pressing T you will add a text in the selected element"></Tip>
          </div>
          <div className={styles.container5}></div>
          <div className={styles.ul1}>
            <ListItem text="The grey border should disappear after adding an element inside, indicating that it's not an empty container anymore"></ListItem>
          </div>
        </div>
        <Link to="/positioning-elements" className={styles.navlink}>
          <div className={` ${projectStyles.thqLink} ${styles.container6} `}>
            <Tip></Tip>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AddingElements
