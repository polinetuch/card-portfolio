import React from 'react';
import './Footer.scss';
const Contact = () => {
    return (
        <div className='contact__container' id='contact'>
            <h1>Contact Us To Find Out More</h1>
            <div className='contact__lists'>
                <img src='/footer-logo.jpg'/>   
                <ul>
                    <li type='email'>Email: DEBOODLE1020@GMAIL.COM</li>
                    <li>Instagram: @DEBOODLE_</li>
                </ul>
            </div>
        </div>
    )
};

export default Contact;