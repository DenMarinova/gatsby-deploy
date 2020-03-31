import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header className={headerStyle.header}
    // style={{
    //   background: `rebeccapurple`,
    //   marginBottom: `1.45rem`,
    // }}
  >
    <div
      // style={{
      //   margin: `0 auto`,
      //   maxWidth: 960,
      //   padding: `1.45rem 1.0875rem`,
      // }}
    >
      <h1 style={{ margin: 0 }}>
        <Link  to="/" className={headerStyle.title}
          // style={{
          //   color: `white`,
          //   textDecoration: `none`,
          // }}
        >
          {siteTitle}
        </Link>
      </h1>

      <nav>
        <ul className={headerStyle.navList}>
          <li>
            <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/sample-page">Home</Link>
          </li>
          <li>
            <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/">News</Link>
          </li>
          <li>
            <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/about">About</Link>
          </li>
          <li>
            <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/contacts">Contact</Link>
          </li>
        </ul>
      </nav>
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
