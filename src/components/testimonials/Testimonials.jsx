import React from 'react'
import './testimonials.css'
import testimonialsArray from './testimonialData'

// Core modules imports are same as usual
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Styles must use direct files imports
import 'swiper/css';
import  'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Palavras de quem já trabalhou comigo</h5>
      <h2>Recomendações do LinkedIn</h2>

      <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          testimonialsArray.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className='testimonial' key={index}>
                <div className='reviewer__avatar'>
                  <img src={avatar} alt={name}/>
                </div>
                <h5 className='reviewer'>{name}</h5>
                <small className='review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
