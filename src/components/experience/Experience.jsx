import React from 'react'
import './experience.css'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiFigma} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiPython} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {SiDocker} from 'react-icons/si'
import {SiDatadog} from 'react-icons/si'
import {SiTestinglibrary} from 'react-icons/si'
import {SiJest} from 'react-icons/si'
import {SiMocha} from 'react-icons/si'
import {SiChai} from 'react-icons/si'
import {SiCypress} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'
import {FaTrello} from 'react-icons/fa'
import {FaJira} from 'react-icons/fa'
import {BsGit} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Minhas habilidades</h5>
      <h2>Skills técnicas</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Front-End</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <SiHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Avançado</small>
              </div> 
            </article>
            <article className='experience__details'>
              <SiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact className='experience__details-icon'/>
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiFigma className='experience__details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Iniciante</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTypescript className='experience__details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Iniciante</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Back-End</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Iniciante</small>
              </div>
            </article>
            <article className='experience__details'>
              <GrMysql className='experience__details-icon'/>
              <div>
                <h4>mySQL</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiDocker className='experience__details-icon'/>
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiDatadog className='experience__details-icon'/>
              <div>
                <h4>Datadog</h4>
                <small className='text-light'>Iniciante</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__tests'>
          <h3>Testes</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <SiJest className='experience__details-icon'/>
              <div>
                <h4>Jest</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTestinglibrary className='experience__details-icon'/>
              <div>
                <h4>React Testing Library</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMocha className='experience__details-icon'/>
              <div>
                <h4>Mocha</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiChai className='experience__details-icon'/>
              <div>
                <h4>Chai</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCypress className='experience__details-icon'/>
              <div>
                <h4>Cypress</h4>
                <small className='text-light'>Iniciante</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__extra'>
          <h3>Outros</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaGithub className='experience__details-icon'/>
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaTrello className='experience__details-icon'/>
              <div>
                <h4>Trello</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaJira className='experience__details-icon'/>
              <div>
                <h4>Jira</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsGit className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
