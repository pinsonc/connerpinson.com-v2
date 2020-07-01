import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#018786`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        style={{
          maxWidth: 960,
          paddingTop: `1.0875rem`,
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
        }}>
        <Link
          to={`/blog/`}
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `20px`
          }}
        >
          Blog
        </Link>
        <Link
          to={`/dev/`}
          style={{
            marginLeft: 20,
            color: `white`,
            textDecoration: `none`,
            fontSize: `20px`
          }}
        >
          Projects
        </Link>
        <Link
          to={`/gallery/`}
          style={{
            marginLeft: 20,
            color: `white`,
            textDecoration: `none`,
            fontSize: `20px`
          }}
        >
          Gallery
        </Link>
      </div>
      <div style={{paddingTop: `1.0875rem`}}>
        <a style={{color: 'white', textDecoration: 'none'}} target="_blank" rel="noreferrer" aria-label="LinkedIn" href='https://www.linkedin.com/in/conner-pinson/'><FaLinkedin /></a>
        <a style={{color: 'white', textDecoration: 'none', paddingLeft: '10px'}} target="_blank" rel="noreferrer" aria-label="GitHub" href='https://github.com/pinsonc'><FaGithub /></a>
        <a style={{color: 'white', textDecoration: 'none', paddingLeft: '10px'}} target="_blank" rel="noreferrer" aria-label="Twitter" href='https://twitter.com/pinsonneedles'><FaTwitter /></a>
        <a style={{color: 'white', textDecoration: 'none', paddingLeft: '10px'}} target="_blank" rel="noreferrer" aria-label="YouTube" href='https://www.youtube.com/channel/UC8oDiWMhnO3FqLTpYTpSOxA'><FaYoutube /></a>
        <a style={{color: 'white', textDecoration: 'none', paddingLeft: '10px'}} target="_blank" rel="noreferrer" aria-label="E-mail" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%63%6F%6E%6E%65%72%2E%70%69%6E%73%6F%6E%40%68%65%79%2E%63%6F%6D"><FaEnvelope /></a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
