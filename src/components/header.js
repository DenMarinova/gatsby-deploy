import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle from './header.module.scss'
import Image from "../components/image"


const Header = ({ siteTitle }) => (
<div  className={headerStyle.header}>
  <div style={{ width: `40%`, float: `left`}}>
      <Image />
      </div>

  <header style={{ width: `50%`, float: `left`}} className={headerStyle.header}>
    <div >
      <h1 style={{ margin: 0 }}>
        <Link  to="/" className={headerStyle.title}>
          {siteTitle}
        </Link>
      </h1>

      <nav>
        <ul className={headerStyle.navList}>
          <li>
            <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/sample-page">Home</Link>
          </li>
          <li>
            <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/">Posts</Link>
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
 
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
