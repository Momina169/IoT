import React from 'react'
import './blogs.css'
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './index.js'


const Blogs = () => {
    return (
        <div className='iot__blog section__padding' id='blog'>
            <div className='iot__blog-heading'>
                <h1 className='gradient__text'>A lot is happening.We are Blogging about it</h1>
            </div>
            <div className='iot__blog-container'>
                <div className='iot__blog-container-groupA'>
                    <Article blogPic={blog01} date="9 Sep 2022" title="Enhancing Decision-Making Through Artificial Intelligence" />
                </div>
                <div className='iot__blog-container-groupB'>
                    <Article blogPic={blog02} date="9 Sep 2022" title="IoT's Role in Revolutionizing Patient Care" />
                    <Article blogPic={blog03} date="9 Sep 2022" title="Enhancing Efficiency and Sustainability" />
                    <Article blogPic={blog04} date="9 Sep 2022" title="IoT Devices and Cybersecurity Challenges" />
                    <Article blogPic={blog05} date="9 Sep 2022" title="Innovations Driving Manufacturing Efficiency" />
                </div>
            </div>

        </div>
    )
}

export default Blogs