import React from 'react'
import './Landing.css'


function Landing() {
    return (
        <div className='home'>
            {/* <h1>Who are you ?</h1> */}
            <div className='home__container'>
                <p>Artist</p>
            </div>
            <div className='home__container'>
                <p>Customer</p>
            </div>
            <div className='home__container'>
                <p>Volunteer</p>
            </div>
        </div>
    )
}

export default Landing
