import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaWhatsapp} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_z7h4sup', 'template_c8l5lzd', form.current, 'uHy88-NXnmakY7owe')
    e.target.reset();
  }
  return (
    <section id='contact'>
      <h5>Vamos conversar?</h5>
      <h2>Contate-me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>carolinasilvagc08@gmail.com</h5>
            <a href='mailto:carolinasilvagc08@gmail.com'>Envie uma mensagem</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 (14)99804-7572</h5>
            <a href='https://api.whatsapp.com/send?phone=5514998047572' target='_blank' rel="noreferrer">Fale comigo</a>
          </article>
          <article className='contact__option'>
            <FaInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@lollacodes</h5>
            <a href='https://www.instagram.com/lollacodes' target='_blank' rel="noreferrer">Acompanhe meu conteúdo</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Seu nome completo' required />
          <input type='email' name='email' placeholder='Seu e-mail' required />
          <textarea name='message' rows='7' placeholder='Sua mensagem' required />
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
