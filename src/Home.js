import React from 'react';
import './App.css'
import myImage from './wifi.webp';
const Home = () => {
    return (
        <div className='centered-text'>
            <img src={myImage} alt="Zahronito Team" className="image" />
            The Zahronito Wifi Team
            </div>
    );
}

export default Home;
