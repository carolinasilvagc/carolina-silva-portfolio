import React from 'react'
import CV from '../../assets/carolina-silva-fullstack.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Fale comigo</a>
    </div>
  )
}

export default CTA
