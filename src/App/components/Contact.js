import React, {useState} from 'react';
import ContactForm from './ContactForm';
import ContactMessage from './ContactMessage';

const Contact = (props) => {
  const [view, setView] = useState('form');

  const updateViewSuccess = () => {
    setView('success');
  };
  const updateViewFailure = () => {
    setView('failure');
  };
  const resetView = () => {
    setView('form');
  };

  return (
    <div id="contact">
    <h1>Contact Me</h1>
    <hr/>
    <p>
      Email me at <strong>kmorgan8588@gmail.com</strong>, or use the form below.
    </p>
    <ContactMessage view={view} />
    <ContactForm success={updateViewSuccess} fail={updateViewFailure} clear={resetView} />
  </div>
  )
}


export default Contact;
