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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <hr></hr>
        <footer style={{color: 'gray'}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a style={{textDecoration: 'none', color: 'gray'}} href="https://www.gatsbyjs.org">Gatsby</a> + {' '}
          <a style={{textDecoration: 'none', color: 'gray'}} href="https://reactjs.org/">React</a> + {' '}
          <a style={{textDecoration: 'none', color: 'gray'}} href="https://www.netlify.com/">Netlify</a> + {' '}
          <FaHeart style={{color: 'red'}}/>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
