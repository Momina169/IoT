import React from 'react'
import './article.css'

const Article = ({blogPic, date, title}) => {
    return(
        <div className='iot__blog-container-article'>
            <div className='iot__blog-container-article_image'>
                <img src={blogPic} alt="blog image" />
            </div>
            <div className='iot__blog-container-article_content'>
                <p>{date}</p>
                <h3>{title}</h3>
                <p>Read Full Article</p>
            </div>
            
        </div>
    )
}

export default Article