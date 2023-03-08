import React from 'react';
import '../Cards.css';
import '../../App.css';
import Footer from '../Footer';
import { Button } from '../Button';

function Conclusion() {
  return (
    <>
        <div className='cards'>
        <h1>Conclusion</h1>
        <div className ='cards__container'>
          <div className='cards__wrapper'>
          Overall, I believe that multimodal texts are extremely helpful in the teaching and learning of literacy, and it should be apply in classroom with intentions. Over my literacy journey, I began to realize that the power of words comes from its connections with the physical world. As for instructors who are teaching, the goal is to help student develop a connection between words and reality in their mind, and multimodal texts are proven helpful here. With the combination of texts, pictures, videos, activities, etc, students could learn more effectively. In addition, multimodal texts provide multiple entry points for students of all abilities and learning styles to access and engage with the material. For instance, students who are visual learners can benefit greatly from the use of images and videos, while those who learn through kinesthetic activities can engage with interactive elements in the text. Furthermore, the use of multimodal texts encourages creativity and critical thinking skills as students are required to interpret and analyze information presented in various formats. It also enables them to create their own multimodal texts, which is a valuable skill in today's digital age.
          </div>
          <div className='cards__wrapper'>
          Side Dish: Ever Curious about how dragons howl?
          </div>

         <div class="video-container">
         <iframe width="386" height="686" src="https://www.youtube.com/embed/RbWdws0ahPo" title="龍怎麼叫" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className='cards__wrapper'>
          
          </div>

          <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkSet ='/Econ'
        >
          <i class="fas fa-arrow-left"></i> PREVIOUS PAGE
        </Button>
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkSet ='/Reference'
        >
          REFERENCE <i class="fas fa-arrow-right"></i>
        </Button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Conclusion;