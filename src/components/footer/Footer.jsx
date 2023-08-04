import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>LOLLACODES</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Sobre mim</a></li>
        <li><a href='#experience'>Experiência</a></li>
        <li><a href='#portfolio'>Portfólio</a></li>
        <li><a href='#testimonials'>Recomendações</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.instagram.com/lollacodes' target='_blank' rel="noreferrer"><BsInstagram /></a>
        <a href='https://www.github.com/carolinasilvagc' target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href='https://www.linkedin.com/in/carolinasilvagc' target='_blank' rel="noreferrer"><BsLinkedin /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Página criada por Carolina Silva. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer
