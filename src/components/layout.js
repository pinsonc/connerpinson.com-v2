/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaHeart } from "react-icons/fa"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{background: "#121212", height: '100%', boxShadow: '0 50vh 0 50vh #121212'}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
        <div style={{background: "white", height: '1px', opacity: '87%'}}></div>
        <footer style={{color: 'gray', background: '#121212', height: `100%`, width: `100%`}}>
          Conner Pinson, © {new Date().getFullYear()} <br></br> Built with
          {` `}
          <a style={{textDecoration: 'none', color: 'gray'}} href="https://www.gatsbyjs.org">Gatsby</a> + {' '}
          <a style={{textDecoration: 'none', color: 'gray'}} href="https://reactjs.org/">React</a> + {' '}
          <a style={{textDecoration: 'none', color: 'gray'}} href="https://www.netlify.com/">Netlify</a> + {' '}
          <FaHeart style={{color: 'red'}}/>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
