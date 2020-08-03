import React from 'react';
import {Link} from 'react-router-dom';

const NavBarLink = (props) => {
  const { linkName } = props;
  let linkDestination;

  linkName === "Home" ? linkDestination = '/' : linkDestination = linkName;
  return (
    <div>
      <Link to={linkDestination}>{linkName}</Link>
      </div>
  )
}



export default NavBarLink;
