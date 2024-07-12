import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import header from '../../assets/Illustration.png'

const Header = () => {
    return (
        <div className='iot__header section__padding' id='home'>
            <div className='iot__header-content'>
                <h1 className='gradient__text'>Let&apos;s Build Your Future with IoT</h1>
                <p>Delve into the transformative potential of the Internet of Things, where seamless connectivity and intelligent solutions redefine modern living.</p>

                <div className='iot__header-content__input'>
                    <input type='email' placeholder='Your Email Address' />
                    <button type='button'>Take the First Step</button>
                </div>

                <div className='iot__header-conten__people'>
                    <img src={people} alt='people' width='181px' height='38px' />
                    <p>40,000 people requested access a visit in last 24 hours</p>
                </div>
            </div>

            <div className='iot__header-image'>
                <img src={header} alt='Illustration-header' />
            </div>

        </div>
    )
}

export default Header