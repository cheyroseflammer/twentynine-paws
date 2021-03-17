import { pricing } from './pricing'
import Prices from './Prices'
import { Component } from 'react'

export class PriceList extends Component {
  render() {
    return (
      <div>
        {pricing.map((item, index) => {
          return (
            <ol key={index}>
              <Prices
                title={item.title}
                services={item.services}
                price={item.price}
              />
            </ol>
          )
        })}
      </div>
    )
  }
}

export default PriceList
