import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/ME2.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
          <h5>Hello</h5>
          <h1>Venera Kodo</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA/>
          <HeaderSocial/>

          <div className="me">
            <img src={ME} alt="me"/>
          </div>

          <a href="#contact" classname="scroll_down">Scroll Down</a>

      </div>

    </header>
  )
}

export default Header