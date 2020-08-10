import React from 'react';
import { Link } from 'react-router-dom';

const Missing = (props) => (
  <div>
    <h1>Oops!</h1>
    <p>
      It appears the page you're looking for doesn't exist.  Navigate back to <Link to="/" >Home</Link>
    </p>
  </div>
);


export default Missing;
