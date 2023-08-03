import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com/in/carolinasilvagc' target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href='https://github.com/carolinasilvagc' target='_blank' rel="noreferrer"><BsGithub /></a>
      <a href='https://instagram.com/lollacodes' target='_blank' rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials
