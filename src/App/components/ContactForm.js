import React from 'react';
import useForm from '../Hooks/useForm';
import postEmail from '../Util/postEmail';


const ContactForm = (props) => {
  const { success, fail } = props;

  const handleSend = () => {
    postEmail('/email', values)
    .then(message => {
      if (message === 'fail') {
        throw new Error(message);
      }
      return;
    })
    .then(() => success())
    .then(() => reset())
    .catch(err => {
      fail()
    })
  }

  const { values, handleSubmit, handleChange, reset } = useForm(handleSend);

   return (
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
      </div>);
};

export default ContactForm;
