import React from 'react'
import './footer.css'
import iotLogo from '../../assets/iot.png'
const Footer = () => {
    return(
        <div className='iot__footer section__padding'>
            <div className='iot__footer-heading'>
                <h1 className='gradient__text'>Do You want to explore the future before others.</h1>
            </div>
            <div className='iot__footer-btn'>
                <button type='button'>Request Early Access</button>
            </div>
            <div className='iot__footer-links'>
                <div className='iot__footer-links-logo'>
                    <img src={iotLogo}  alt="iot" />
                </div>
                <div className='iot__footer-links_div'>
                    <h4>Links</h4>
                    <p>Social Media</p>
                    <p>Overons</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='iot__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>About us</p>
                </div>
                <div className='iot__footer-links_div'>
                    <h4>Get in Touch</h4>
                    <p>Main Outfall road, Lahore</p>
                    <p><a href="linkedin.com/in/mominaijaz">Linkedin</a></p>
                    <p>mominaijaz169@gmail.com</p>
                </div>
            </div>
            <div className='iot__footer-copyright'>
                <p>&copy; 2024. Made by Momina Ijaz</p>
            </div>
        </div>
    )
}

export default Footer