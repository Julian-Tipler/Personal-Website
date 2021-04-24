import React from 'react'
import './Home.css'

function Home() {
    return (
      <div className="home">
        <div className='home-left'>
          <h1>I'm Julian Tipler!</h1>
          <p>
              <div>text about me</div>
          </p>
        </div>
        <div className='home-right'>
            <img alt='myself here'></img>
        </div>
      </div>
    );
}

export default Home
