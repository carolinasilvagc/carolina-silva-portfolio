import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageDetail} from 'react-icons/bi'
import {useState} from 'react'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {CgGames} from 'react-icons/cg'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#home' onClick={(() => setActiveNav('#home'))} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#hobbies' onClick={() => setActiveNav('#hobbies')} className={activeNav === '#hobbies' ? 'active' : ''}><CgGames /></a>
      <a href='#portfolio' onClick={(() => setActiveNav('#portfolio'))} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFolderOpen /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav
