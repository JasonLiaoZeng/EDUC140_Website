import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
        <div className='foot-link-wrapper'>
            <p className='footer-subscription-heading'> Credited by: </p>
            <p className='footer-subscription-text'> Jason Liao-Zeng </p>
            <p className='footer-subscription-text'> Professor Hull </p>
            <p className='footer-subscription-text'> EDUC 140AC</p>
            <p className='footer-subscription-text'> 07 March 2023</p>
        </div>

        <div className='foot-link-wrapper'>
            <p className='footer-subscription-heading'> Refered Articles: </p>

            <a href='https://drive.google.com/file/d/1FWtsZGowXSMznPLDK6nOsS228ZJ7MmrE/view'>
                <p className='footer-subscription-text'> “Minds and Society” </p>
            </a>

            <a href='https://bcourses.berkeley.edu/courses/1522365/pages/module-5-social-learning-and-multimodality?module_item_id=16730544'>
                <p className='footer-subscription-text'> "Multimodality in the Classroom"  </p>
            </a>
        </div>


        </div>
    </div>
  )
}

export default Footer