import React from 'react';
import './Cards.css';
import '../App.css';
import { Button } from './Button';

function CardEcon() {
  return (
    <div className='cards'>
       <div className ='cards__container'>

        <div className='cards__wrapper'>
          Now, there is a story to be told. As of today, I am fluent in both Chinese and English. Chinese is my first language, and I can no longer recall how I learned it. But, I could affirm that multimodal literacy fulfilled my entire journey on learning English. 
        </div>

        <div className='cards__wrapper'>
          I still remembered there was an English program called ESL for beginners in my elementary school, and I remember that simple vocabulary words were being taught. The instructor provides a picture for each of the vocabulary being taught, and this makes our learning progress much smoother. For example, at the age of 10, I already knew what an apple is, but I did not know how to say it or spell it in English, the instructor’s way of teaching lets me make a connection with what I already knew to the spelling and sound. I proposed that is how vocabulary is being taught in most languages today.
        </div>

        <div className='cards__wrapper'>
          On the other hand, I recall that most other students in the ESL program and I had a hard time learning the twelve months. First of all, no picture is provided for the twelve months, it is very hard to illustrate what month is in picture. Therefore, when we saw the word “January,” “February,” etc., we had no idea what these words corresponded to. Until one of my friends who also speak Chinese told me that those are correspond to each month of the year, I was confused and unmotivated to learn those words. As for now, I think that students will have a easier time to understand the words correspond to months of a year if a calendar is provided on the side when teaching the words. 
        </div>

        <div className='cards__wrapper'>
        Another thing I want to mentioned is that language should be reflecting reality, this is also an idea mentioned in “Mind and Society,” and the quote is “This means that written language consists of a system of signs that designate the sounds and words of spoken language, which, in turn, are signs for real entities and relations.” I am in great support for this idea because I realized how lowering the difficulty to literacy can benefit the society. In Chinese and some other languages, the words for months are easy to learn because they are differentiated by numbers, but the word in months in English is following some old traditions. To be specific, words for months in Chinese are 一月，二月，三月，etc, and this literally translate to month one, month two, month three, etc. Meanwhile that the words January, February, March, etc are something that students cannot interpret. This does not mean that Chinese is easier to learn than English. In fact, Chinese is one of the hardest language to learn in my opinion. However, the structure of words in this example is brilliant, it will be easier to learn vocabulary words if the words or syllables contain symbolic meaning themselves.
        </div>

        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkSet ='/Environment'
        >
          <i class="fas fa-arrow-left"></i> PREVIOUS PAGE
        </Button>
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkSet ='/Conclusion'
        >
          NEXT PAGE <i class="fas fa-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
}

export default CardEcon;