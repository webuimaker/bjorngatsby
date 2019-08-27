import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


import MobileSocialLinks from "./MobileSocialLinks"
import MobilePageLinks from "./MobilePageLinks"
import MobileBio from "./MobileBio"
import "./header.css"
import logo from "../../images/logo.jpg"

const Header = ({ siteTitle, tagline, author, contacts }) => {

  return (
    <header className="head-main" >
		<div className="container">
      <div className="head-elements"
      >
        <h1 className="head-logo " style={{ margin: 0 }}>
          <Link
            to="/"
          >
		  <img alt="{siteTitle}" src={logo} /> 
            
          </Link>
        </h1>
		
		<div id="main-menu" className="main-menu ">
			  <ul>
				<li><Link to="/">Home</Link></li>
                <li>            <Link to="/projects">Projects</Link></li>
                <li>            <Link to="/services">Services</Link></li>
                <li>            <Link to="/about">About Us</Link></li>
                <li>            <Link to="/blog">Blog</Link></li>
                <li>            <Link to="/contact">Contact Us</Link></li>
				
			  </ul>
			</div>
		
        
      </div>
      <MobileSocialLinks contacts={contacts} />
      <MobilePageLinks />
      <MobileBio author={author} />
	  
	  </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
