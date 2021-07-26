import React from 'react'
import { Link } from 'react-router-dom'
import './Footer2.css'

function Footer2() {
  return (
    <div className='container'>
      <div className='map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31418.394570370874!2d-116.05058658642449!3d34.13477847130304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgrooming%20near%20me!5e0!3m2!1sen!2sus!4v1615667543618!5m2!1sen!2sus'
          width='400'
          height='200'
          title='google-map'
          allowfullscreen=''
          loading='lazy'
          tabIndex='0'
        ></iframe>
      </div>
      <div className='links-container'>
        <div className='links-wrapper'>
          <div className='links-items'>
            <h2 className='title'>About Us</h2>
            <Link to='/mission-statement'>
              <p className='link-item'>Mission Statement</p>
            </Link>
            <Link to='/gallery'>
              <p className='link-item'>Gallery</p>
            </Link>
            <Link to='/our-team'>
              <p className='link-item'>Our Team</p>
            </Link>
          </div>
          <div className='links-items'>
            <h2 className='title'>Grooming</h2>
            <Link to='/forms'>
              <p className='link-item'>Forms & Policies</p>
            </Link>
            <Link to='/prices'>
              <p className='link-item'>Services & Price List</p>
            </Link>
          </div>
          <div className='links-items'>
            <h2 className='title'>Contact Us</h2>
            <Link to='/'>
              <p className='link-item'>(555)555-5555</p>
            </Link>
            <Link to='/'>
              <p className='link-item'>Email Us</p>
            </Link>
            <p className='address'>123 Dog St Twentynine Palms CA, 92277</p>
          </div>
          <div className='links-items'>
            <h2 className='title'>Social Medias</h2>
            <Link to='/'>
              <p className='link-item'>Facebook</p>
            </Link>
            <Link to='/'>
              <p className='link-item'>Instagram</p>
            </Link>
            <Link to='/'>
              <p className='link-item'>Yelp</p>
            </Link>
          </div>
          <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='social-logo'>
                  <Link className='social-link' to='/'>
                    <div className='social-icon'>
                      <i className='fas fa-paw' />
                    </div>
                    <p className='idk'>29 Paws</p>
                  </Link>
                </div>
                <div className='website-rights'>29 Paws Grooming © 2021</div>
              </div>
            </section>
        </div>
      </div>
    </div>
  )
}

export default Footer2
