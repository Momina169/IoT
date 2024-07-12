import React from 'react'
import './whatiot.css'
import Feature from '../../components/feature/Feature'

const Whatiot = () => {
    return(
        <div className='iot__whatiot section__margin' id='whatiot'>
            <div className='iot__whatiot-feature'>
                <Feature title="What is IoT" text="The Internet of Things (IoT) is a network of interconnected devices that communicate and exchange data through the internet. These devices, equipped with sensors and software, range from household items to industrial machinery. IoT aims to enhance efficiency, provide real-time insights, and improve quality of life by creating smarter environments."/>
            </div>
            <div className='iot__whatiot-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className='iot__whatiot-container'>
                <Feature title="Connectivity " text="IoT enables seamless connectivity and integration of  devices through the internet, allowing them to communicate and share data in real-time." />
                <Feature title="Data" text="IoT devices gather vast amounts of data from their surroundings through embedded sensors. This data is then analyzed to extract valuable insights."/>
                <Feature title="Applications" text="IoT's applications span across industries such as healthcare, agriculture, manufacturing, and smart cities.IoT is driving significant advancements."/>
            </div>
            
        </div>
    )
}

export default Whatiot