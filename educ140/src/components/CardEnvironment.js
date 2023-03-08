import React from 'react';
import './Cards.css';
import '../App.css';
import { Button } from './Button';

function CardEnvironment() {
  return (
    <div className='cards'>
      <div className ='cards__container'>
        <div className='cards__wrapper'>
          First, as provided in introduction, multimodal literacy refers to the ability to express and absorb knowledge through the use of multiple mode. In “Mind and Society,” Lev Vygotsky provide three different theories about the relation between the process of learning and nervous system development. Among the three theories, Yvgotsky supports Kofika’s theory, which stated that the process of learning and nervous system developement are correlated. Yvgotsky’s explanation of Kofika’s theory is as follow:
          <div className='cards__wrapper_indent'>
          “The third theoretical position on the relation between learning and development attempts to overcome the extremes of the other two by simply combining them. A clear example of this approach is Kofika’s theory, in which development is based on two inherently different but related processes, each of which influences the other. On the one hand is maturation, which depends directly on the development of the nervous system; on the other hand is learning, which itself is also a developmental process.” (Yvgotsky)
          </div>
          In the quote, Yvgotsky rephased Kofika’s theory and provided an illustration on how he believes that learning and development is related. I, on the other hand, also believe this theory holds because the support for this theory is powerful. Maturation, which is dependent on the development of the nervous system, provides the foundation for the development of higher mental functions. Meanwhile, learning is a developmental process that is influenced by maturation and also has an impact on further development. In other words, the two processes are inherently interconnected and cannot be separated. Overall, what is above provides a fundamental model for multimodal literacy. 
        </div>
        
        <div className='cards__wrapper'>
          By using the model above, learning and development are related, so one can fasten the learning process by stimulating its nervous system development. Therefore, using multiple mode can help stimulate nervous system development, then that supplements the learning process. In Myrrh Domingo’s video “Multimodality in the Classroom,” Domingo mentioned how she uses multimodal text to help students literate. In Domingo’s teaching, she encourages student to first generate ideas with multimodal text such as pictures and audios before trying to put them into a literate form such as a research paper. Domingo also explained in her video that by this method, students tend to generate deeper understanding of a topic. I also agree with that her method helps students in their literate process. Often times, it is hard for students to directly express an idea or feeling with words. But, by jogging the ideas down with multimodal texts, students can easily come back and derive the symbolic meaning behind them, and they will eventually come up with a literate description for each of them. On the other hand, instructions and explanations in plain text might not be the best way to lecture students in some situations. It is often more efficient to both teach and learn using the combination of literacy and multimodal texts such as pictures, videos, activities, etc.
        </div>

        <div className='cards__wrapper'>
        Another reason why multimodal literacy is more effective, under the model representing Kofika’s theory, is that students can utilize what they had developed previously onto learning new topics. In “Multimodality in the Classroom,” Domingo mentioned that it is often easier for students to relate to multimodal texts, the reason behind this is that multimodal text are closer forms to the physical world, which is more familiar. Moreover, one truth is that literacy must be connected to something that exist in the physical world. There is an ancient Chinese dialect “读万卷书，不如行万里路。”It means that people would gain more knowledge by traveling thousands of miles than reading thousands of books, this is also because that ancient Chinese believed that literacy are developed upon the physical world.
        </div>
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkSet ='/Econ'
        >
          NEXT PAGE <i class="fas fa-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
}

export default CardEnvironment;