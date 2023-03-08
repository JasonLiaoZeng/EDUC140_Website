import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import homePic from "../pictures/home.jpg"

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={homePic} alt='pic'  />
      <h1>Contribution of Multimodal Literacy to New English Learners</h1>
      <p>by Jason Liao-Zeng</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          LinkSet= '/Environment'
        >
          START READING
        </Button>
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkSet ='/Reference'
        >
          SEE REFERENCE <i className='fa-solid fa-book' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;