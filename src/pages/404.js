import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaTwitter } from "react-icons/fa"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: NOT FOUND</h1>
    <p>Follow me on Twitter 
      <a style={{color: 'white', textDecoration: 'none', paddingLeft: '10px'}} target="_blank" rel="noreferrer" aria-label="Twitter" href='https://twitter.com/pinsonneedles'><FaTwitter /></a>
      <a style={{color: 'white', textDecoration: 'none', paddingLeft: '10px'}} target="_blank" rel="noreferrer" aria-label="Twitter" href='https://twitter.com/pinsonneedles'><FaTwitter /></a>
      <a style={{color: 'white', textDecoration: 'none', paddingLeft: '10px'}} target="_blank" rel="noreferrer" aria-label="Twitter" href='https://twitter.com/pinsonneedles'><FaTwitter /></a>
      </p>
  </Layout>
)

export default NotFoundPage
