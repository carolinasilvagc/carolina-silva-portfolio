import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/carolina-silva.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou a</h5>
        <h1>Carolina Silva</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt="Carolina Silva" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
