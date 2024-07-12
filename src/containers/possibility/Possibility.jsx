import React from 'react'
import './possibility.css'
import possibility from '../../assets/Feature Image.png'

const Possibility = () => {
    return (
        <div className='iot__possibility section__padding' id='possibility'>
            <div className='iot__possibility-image'>
                <img src={possibility} alt="Image here" />
            </div>
            <div className='iot__possibility-content'>
                <h4>Secure Early Access and Start Today.</h4>
                <h1 className="gradient__text">Unleash Potential Beyond Your Wildest Imagination</h1>
                <p> Explore new realms of possibility in technology, business, and personal growth. Dare to dream big and think differently to shape a brighter future, filled with unprecedented achievements and advancements.</p>
                <h4>Secure Early Access and Start Today.</h4>
            </div>
        </div>
    )
}

export default Possibility