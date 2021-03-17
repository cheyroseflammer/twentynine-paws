import React, { Component } from 'react'
import { pricing } from './pricing'
import './Prices.css'

export class Prices extends Component {
  render() {
    const { title, price, services } = this.props
    return (
      <div className='price'>
        <h2 className='price-title'>{title}</h2>
        <ul>
          {pricing.forEach((service, index) => {
            console.log(service.services)
            return (
              <li key={index} className='service'>
                {service.services}
              </li>
            )
          })}
        </ul>
        <p className='price-price'>${price}</p>
      </div>
    )
  }
}

export default Prices
