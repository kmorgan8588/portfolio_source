import React, {useState} from 'react';
import ContactForm from './ContactForm';

const Contact = (props) => {
  const [view, setView] = useState('form');

  return (
    <div id="contact">
    <h1>Contact Me</h1>
    <hr/>
    <p>
      Email me at <strong>kmorgan8588@gmail.com</strong>, or use the form below
    </p>
    <ContactForm view={view} />
  </div>
  )
}


export default Contact;
