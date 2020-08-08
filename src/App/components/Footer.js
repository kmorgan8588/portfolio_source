import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => (
  <div className="footer-contact">
    <div>
    <i style={{fontSize: "24px", color: "cornsilk"}} className="fa fa-github" aria-hidden="true"></i> <a target="_blank" href="https://github.com/kmorgan8588"> Github</a>
    </div>
    <div>
    <i style={{fontSize:"24px", color: 'rgb(39, 111, 206)'}} className="fa fa-linkedin"></i> <a target="_blank" href="https://www.linkedin.com/in/kyle-morgan-a36b89a5/"> LinkedIn</a>
    </div>
    <div>
    <i style={{fontSize: "24px", color: "cornsilk"}}  className="fa fa-envelope-o" aria-hidden="true"></i><Link to="Contact">{' '}Email</Link>
    </div>
  </div>
);


export default Footer;
