import React from 'react';

const ContactMessage = (props) => {
  const { view } = props;

  switch (view) {
    case 'success':
      return <p>Thank you for your email, I'll respond at my earliest convenience.</p>;
    case 'failure':
      return <p>Something went wrong, please try again.</p>
    default:
      return null;
  }
}


export default ContactMessage;
