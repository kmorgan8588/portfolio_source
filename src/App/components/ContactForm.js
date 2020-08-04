import React from 'react';
import useForm from '../Hooks/useForm';


const ContactForm = (props) => {
  const { view } = props;
  const log = () => {
    console.log(values);
    reset();
  }
  const { values, handleSubmit, handleChange, reset } = useForm(log);



   return view === 'form' ? (
   <div className="form-style">
      <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>Email Info</legend>
        <input type="text" name="name" placeholder="Your Name *" value={values.name || ""} onChange={handleChange} required/>
        <input type="text" name="subject" placeholder="Subject *" value={values.subject || ""} onChange={handleChange} required/>
        <input type="email" name="email" placeholder="Your Email *" value={values.email || ""} onChange={handleChange} required/>
        <textarea name="message" placeholder="Message" value={values.message || ""} onChange={handleChange} required></textarea>
      </fieldset>
      <input type="submit" value="Send" />
      </form>
      </div>) : null;
};

export default ContactForm;
