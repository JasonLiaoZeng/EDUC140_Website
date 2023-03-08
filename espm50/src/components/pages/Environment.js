import React from 'react';
import '../../App.css';
import '../HeroSection.css'
import forestPic from "../../pictures/forest_and_road.jpg"
import mlPic from "../../pictures/multimodal_literacy.png"
import Footer from '../Footer';
import CardEnvironment from '../CardEnvironment';

export default function Environment () {
    return(
        <>
            <div className='hero-container'>
                <img src={mlPic} alt='forest pic'/>
                
            </div>
            <CardEnvironment/>
            <Footer/>
        </>
    );

}