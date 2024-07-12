import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/iot.png'

const Menu = () => {
    return (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#whatiot">What is IoT?</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#possibility">Possiblities</a></p>
            <p><a href="#blog">Blogs</a></p>
        </>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='iot__navbar'>
            <div className='iot__navbar-links'>

                <div className='iot__navbar-links_logo'>
                    <img src={logo} alt="iot-3" />
                </div>

                <div className='iot__navbar-links_container' >
                    <Menu />
                </div>
            </div>
            
            <div className='iot__navbar-sign'>
                <p>Login</p>
                <button type='button'>Register</button>
            </div>

            <div className='iot__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine size={26} color='#fff' onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line size={26} color='#fff' onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='iot__navbar-menu_container scale-up-center'>
                        <div className='iot__navbar-menu_container-links'>
                            <Menu />
                        </div>
                        <div className='.iot__navbar-menu_container-links-sign'>
                            <p>Login</p>
                            <button type='button'>Register</button>
                        </div>
                    </div>
        
                )}
        </div>
        </div >
        
    )
}

export default Navbar