import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBarLink from './NavBarLink';

const links = ["Home", "About", "Projects", "Contact"];

const NavBar = (props) => (
  <div>
    <Router>
      {links.map((linkName, index) => <NavBarLink linkName={linkName} key={index}/>)}
    </Router>
  </div>
)


export default NavBar;
