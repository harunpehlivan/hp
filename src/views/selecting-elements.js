import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import projectStyles from '../style.module.css'
import styles from './selecting-elements.module.css'

const SelectingElements = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>4 - Selecting Elements - Studio Intro</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="4 - Selecting Elements - Studio Intro" />
        <meta property="og:description" content="HARUN PEHLİVAN" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/26b81a0d-2735-4001-b91b-6a42913a9f3d/9c0e1fcb-1eb3-45ae-8b20-af1a4955c9c4?org_if_sml=1"
        />
      </Helmet>
      <div className={styles.container1}>
        <Heading
          text="There are multiple ways to select and group elements "
          heading1="Selecting Elements"
        ></Heading>
        <div className={styles.ul}>
          <ListItem text="You can select multiple items by holding Ctrl/Cmd or Shift and clicking the items"></ListItem>
          <ListItem text="Same thing can be achieved in the Tree View"></ListItem>
          <Tip text="The only difference is that in the Tree View pressing Shift + Click allows selecting all items in between two elements"></Tip>
          <ListItem text="You can also mouse-select by dragging over the desired items and holding Ctrl/Cmd pressed "></ListItem>
          <Tip text="If you are not dragging over a container you don't need to press Cmd/Ctrl"></Tip>
          <ListItem text="If you want to become a pro go to the Keyboard Shortcuts - Control - Selection and see all the ways you can select elements"></ListItem>
          <Tip text="Open the Keyboard Shortcuts panel by pressing Ctrl + Shift + /"></Tip>
        </div>
        <div className={styles.container2}></div>
      </div>
      <div className={styles.container3}>
        <h2 className={` ${projectStyles.subheading} ${styles.text} `}>Give it a try</h2>
        <span className={styles.text1}>And you can also select me</span>
        <div className={styles.container4}>
          <img src="https://play.teleporthq.io/static/img/default.png" className={styles.image} />
          <h1 className={styles.h1}>Heading</h1>
          <span className={styles.text2}>Text</span>
          <span className={styles.text3}>Text</span>
          <span className={styles.text4}>Text</span>
        </div>
      </div>
      <h1 className={styles.text5}>Select me as well</h1>
      <div className={styles.container5}>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
          className={styles.image1}
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
          className={styles.image2}
        />
      </div>
      <span className={styles.text6}>And you can also select me</span>
      <div className={styles.container6}>
        <Link to="/styling-elements" className={styles.navlink}>
          <div className={` ${projectStyles.thqLink} ${styles.container7} `}>
            <Tip></Tip>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SelectingElements
