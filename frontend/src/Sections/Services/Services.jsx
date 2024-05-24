import React from 'react'
import { VscCoffee } from "react-icons/vsc";
import { PiBowlFood } from "react-icons/pi";
import "./Services.scss"

const Services = () => {
  return (
    <div>
      <div className='services'>
        <div className='services-container'>
        <div className="service-top">
           <div className="serviceicon">
              <PiBowlFood />
            </div>
            <div className="servicetitle">
              <p>----------</p>
              <h3>Our Services</h3>
              <p>----------</p>
            </div>
           </div>
            <div className='eating-times'>
                <div className='eating-time'>
                <div className='timeicon'><VscCoffee /></div>
                <h3>Breakfast</h3>
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
                </div>
                <div className='eating-time'>
                <div className='timeicon'><VscCoffee /></div>
                <h3>Brunch</h3>
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
                </div>
                <div className='eating-time'>
                <div className='timeicon'><VscCoffee /></div>
                <h3>Lunch</h3>
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
                </div>
                <div className='eating-time'>
                <div className='timeicon'><VscCoffee /></div>
                <h3>Dinner</h3>
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
