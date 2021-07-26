import React, { Component } from 'react'
import '../MissionStatement/MissionStatement.css'


export class MissionStatement extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className="mission-statement">
                    <h3>Mission Statement</h3>
                    <p>We are a family owned business. Our Mission is to provide a healthy and positive grooming experience for your pet in a professional and stress-free environment. All pets are treated with love and kindness, as well as from a professional and humane approach.  It is our goal to assure owners that their pets will be treated with the same love and respect as we treat our own personal pets. We provide quality grooming by educated and skilled professionals</p>
                </div>
                <div className="weather-widget">
                    <a target="_blank" href="https://www.booked.net/weather/yucca-valley-1591"><img src="https://w.bookcdn.com/weather/picture/32_1591_1_1_34495e_250_2c3e50_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=81122" alt="booked.net"/></a>
                </div>
                <div className="hours">
                  <p className="hours-title">Grooming and Store Hours</p>
                    <table>
                    <tr>
                        <td>Monday</td>
                        <td>Closed</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>8:00am to 5:00pm</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>8:00am to 5:00pm</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>8:00am to 5:00pm</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>8:00am to 5:00pm</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>8:00am to 5:00pm</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>Closed</td>
                    </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default MissionStatement
