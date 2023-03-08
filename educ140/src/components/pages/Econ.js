import React from 'react';
import '../../App.css';
import '../HeroSection.css'
import electricPic from "../../pictures/electric.jpg"
import msPic from "../../pictures/my_story.webp"
import Footer from '../Footer';
import CardEcon from '../CardEcon';


export default function Econ () {
    return(
        <>
            <div className='hero-container'>
                <img src={msPic} alt='electric pic'/>
                <h1>My Multimodal Literacy Story</h1>
            </div>
            <CardEcon/>
            <Footer/>
        </>
    );

}