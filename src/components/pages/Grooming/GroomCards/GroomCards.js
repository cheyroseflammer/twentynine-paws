import React from 'react'
import { Link } from 'react-router-dom'

function GroomCards(props) {
  return (
    <>
      <li className='grooming__item'>
        <Link className='grooming__item__link' to={props.path}>
          <figure
            className='grooming__item__pic-wrap'
            data-category={props.label}
          >
            <img
              src={props.src}
              alt='Full Bath'
              className='grooming__item__img'
            />
          </figure>
          <div className='grooming__item__info'>
            <h5 className='grooming__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default GroomCards
