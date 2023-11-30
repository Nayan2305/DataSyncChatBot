import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { Navbar} from '../Components';
import { useNavigate } from 'react-router-dom';


export const Contact = () => {
    const navigate = useNavigate();
    const form = useRef();
    const notify = () => alert("message sent successfully");
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3twzkje', 'template_6ge2bld', form.current, 'jqkCfJNgbukRgedru')
        .then((result) => {
            console.log(result.text);
            console.log("Message sent");
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  
  
  // const Contact = () => {
  //   const form = useRef();
  
  //   const sendEmail = (e) => {
  //     e.preventDefault();
  //     // Your email sending logic using emailjs
  //   };
  
  //   const handleMailto = (e) => {
  //     e.preventDefault();
  //     window.location.href = 'mailto:tanmaydeshpande2002.com';
  //   };
  
  // const Contact = () => {
  //   const form = useRef();
  //   const sendEmail = (e) => {
  //     e.preventDefault();
  // //We will get public key from Account>>API keys>>Public Key
  //     emailjs.sendForm('service_i91ddvo', 'template_exc5hwq', form.current, '36R9LlocDtQpuAEpE')
  //     e.target.reset();
  //   };
  const handleClick = () =>{
    navigate('/Home');
  }
    return (
      
      <section id='contact'>
        <Navbar/>
        <div className="borderr" >
        <h2 className='title'>Contact Us</h2>
        <div className="container contact__container">
          <div className="contact__options">
          </div>
          <form className='Contact-form' ref={form} onSubmit={sendEmail}>

          <input type="name" name="name" placeholder='Your Full Name' />
            <input type="email" name="email" placeholder='Your Email Id' />
            <textarea type="text" rows='7' name='message' placeholder='Your Message' ></textarea>
            <div className="button-container">
        <button type='submit' className='butn' id='home-button' onClick={notify} to='/Home' >Send</button>
        <button className='butn' id='return-home' to='/Home' onClick={handleClick}  >Home</button>
    </div>


          </form>
        </div>
        </div>
      </section>
    )
  }
export default Contact;