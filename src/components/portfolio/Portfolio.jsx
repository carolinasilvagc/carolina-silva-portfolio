import React from 'react'
import './portfolio.css'
import projectsArray from './projectsData'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus projetos concluídos</h5>
      <h2>Portfólio</h2>

      <div className='container portfolio__container'>
        {
          projectsArray.map(({id, image, title, github, project}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Ver GitHub</a>
                  <a href={project} className='btn btn-primary' target='_blank' rel="noreferrer">Ver Projeto</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
