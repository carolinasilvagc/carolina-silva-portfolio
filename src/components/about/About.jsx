import React from 'react'
import './about.css'
import ME from '../../assets/carolina-silva-illustration.jpeg'
import {FaAward} from 'react-icons/fa'
import {RiMacLine} from 'react-icons/ri'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Meu resumo</h5>
      <h2>Sobre mim</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Uma ilustração que representa o meu busto, feita pela inteligência artificial Lensa.'></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>2 anos</small>
            </article>
            <article className='about__card'>
              <RiMacLine className='about__icon'/>
              <h5>Atuação</h5>
              <small>Full-Stack</small>
            </article>
            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projetos</h5>
              <small>5+ completos</small>
            </article>
          </div>

          <p>
            Oi, Eu sou a Carol! <br/>
            Inicialmente, me formei em Jornalismo, mas logo percebi que aquilo que me move é a tecnologia. Por conta disso, transicionei de carreira. Desde então, venho me dedicando a aprender cada vez mais sobre esse universo. Tenho experiência de trabalho com<span> atendimento ao cliente, marketing digital e recrutamento tech</span>. Também estou explorando as redes sociais <a href='https://www.instagram.com/lollacodes' target='_blank' rel="noreferrer">criando conteúdo no Instagram</a>. Por lá, me chamo Lolla. Se quiser acompanhar meu conteúdo, ficarei grata!
          </p>

          <a href='#contact' className='btn btn-primary'>Contate-me</a>
        </div>
      </div>
    </section>
  )
}

export default About
