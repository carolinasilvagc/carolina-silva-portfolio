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

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Conjunto de habilidades</h5>
      <h2>Minhas skills técnicas</h2>

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
      </div>
    </section>
  )
}

export default Experience
