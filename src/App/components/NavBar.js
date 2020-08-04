import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
import NavBarLink from './NavBarLink';

const links = ["Home", "About", "Projects", "Contact"];

const NavBar = (props) => (
  <div className="navigation">
      {links.map((linkName, index) => <NavBarLink linkName={linkName} key={index}/>)}
  </div>
)


export default NavBar;
