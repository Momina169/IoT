import React from 'react';
import { Brand, CTA, Navbar } from './components'
import { Blogs, Footer, Features,  Header, Possibility, Whatiot } from './containers'
import "./App.css"
import "./index.css"

const App = () => {
  return (
    <div className='App'>
      <div className='bg_gradient'>
        <Navbar />
        <Header />
      </div>

      <Brand />
      <Whatiot />
      <Features />
      <Possibility />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
