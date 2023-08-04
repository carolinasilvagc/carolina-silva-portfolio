import React from 'react'
import './hobbies.css'
import {IoGameController} from 'react-icons/io5'
import {FaLaptopCode} from 'react-icons/fa'
import {FiSmartphone} from 'react-icons/fi'
import {IoShareSocialSharp} from 'react-icons/io5'
import {BiCameraMovie} from 'react-icons/bi'
import {FiMusic} from 'react-icons/fi'
import {PiTelevisionSimpleBold} from 'react-icons/pi'
import {BiBookBookmark} from 'react-icons/bi'

const Hobbies = () => {
  return (
    <section id='hobbies'>
      <h5>O que eu curto fazer?</h5>
      <h2>Hobbies</h2>

      <div className='container hobbies__container'>
        <article className='hobby'>
          <div className='hobby__head'>
            <h3>Tecnologia</h3>
          </div>
          <ul className='hobby__list'>
            <li>
              <IoGameController className='hobby__list-icon'/>
              <p>Games</p>
            </li>
            <li>
              <FaLaptopCode className='hobby__list-icon'/>
              <p>Programação</p>
            </li>
            <li>
              <FiSmartphone className='hobby__list-icon'/>
              <p>Smartphones</p>
            </li>
            <li>
              <IoShareSocialSharp className='hobby__list-icon'/>
              <p>Redes Sociais</p>
            </li>
          </ul>
        </article>

        <article className='hobby'>
          <div className='hobby__head'>
            <h3>Cultura</h3>
          </div>
          <ul className='hobby__list'>
            <li>
              <BiCameraMovie className='hobby__list-icon'/>
              <p>Cinema</p>
            </li>
            <li>
              <FiMusic className='hobby__list-icon'/>
              <p>Música</p>
            </li>
            <li>
              <PiTelevisionSimpleBold className='hobby__list-icon'/>
              <p>Séries</p>
            </li>
            <li>
              <BiBookBookmark className='hobby__list-icon'/>
              <p>Livros</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Hobbies
