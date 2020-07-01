import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

import me from '../images/profile.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style ={{display: 'flex'}}>
      <img src={me} width='250px' height='250px' alt="Conner Pinson headshot" style={{borderRadius: '50%', overflow: 'hidden', flex: 'none'}} />
      <p style={{alignSelf: 'center', paddingLeft: '20px'}}>
        <h2>Hey, I'm Conner</h2>
        Welcome to my little corner of the Internet.
      </p>
      
    </div>
    
    <h2>About Me</h2>
    <p>
      I'm a Tennessee native and recent graduate of Vanderbilt University where I majored in Computer Science and minored in Engineering Management. While 
      studying there I worked for multiple different research laboratories specializing in topics from embedded systems, to VR experience 
      development, to machine learning and computer vision. You can learn about my projects from those labs on my <Link to='/dev/'>Projects</Link> page.
    </p>
    <p>
      Since graduating I've accepted a position as an associate in the Technology Development Program at Capital One in McLean, VA. I will offficially 
      start there in August 2020.
    </p>
    <p>
      In addition to my career pursuits in programming, I also have a hobby as a video and photo editor. My more creative adventures can be found on
      my <Link to='/gallery/'>Gallery</Link> page as well as my <a href='https://www.youtube.com/channel/UC8oDiWMhnO3FqLTpYTpSOxA'>YouTube</a> page.
    </p>
  </Layout>
)

export default IndexPage
