import React, {useState, useEffect} from 'react';


const ContactForm = (props) => {
  const { view } = props;
   return view === 'form' ? (
   <div className="form-style">
      <form method="POST" action="/email" autoComplete="off">
        <fieldset>
        <legend>Email Info</legend>
        <input type="text" name="name" placeholder="Your Name *" required/>
        <input type="text" name="subject" placeholder="Subject *" required/>
        <input type="email" name="email" placeholder="Your Email *" required/>
        <textarea name="message" placeholder="Message" required></textarea>
      </fieldset>
      <input type="submit" value="Send" />
      </form>
      </div>) : null;
};

export default ContactForm;
