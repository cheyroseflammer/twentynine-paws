import React from 'react'
import GroomCards from './GroomCards/GroomCards'
import './Grooming.css'

function Grooming() {
  return (
    <div className='grooming'>
      <h1>Grooming</h1>
      <div className='grooming__container'>
        <div className='grooming__wrapper'>
          <ul className='grooming__items'>
            <GroomCards
              src='assets/full-bath.jpg'
              text='Full Services Bath Package'
              label='Full Bath'
              path='/services'
            />
            <GroomCards
              src='assets/full-groom.jpg'
              text='Full Services Groom Package'
              label='Full Groom'
              path='/services'
            />
          </ul>
          <ul className='grooming__items'>
            <GroomCards
              src='assets/cat-bath.jfif'
              text='Cat Services'
              label='Cat Care'
              path='/services'
            />
            <GroomCards
              src='assets/mavgoose.jpg'
              text='Price List'
              label='Prices'
              path='/services'
            />
            <GroomCards
              src='assets/splash-dash.jfif'
              text='Splash & Dash'
              label='Shake it Off'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Grooming
