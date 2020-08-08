import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import ProjectsList from './ProjectsList';
import Contributions from './Contributions';

const Projects = (props) => {
  const { path, url } = useRouteMatch();

  return (<div>
    <h1>Projects</h1>
    <hr/>
    <ul>
      <li>
        <Link to={url}>Projects</Link>
      </li>
      <li>
        <Link to={`${url}/Contributions`}>Contributions</Link>
      </li>
    </ul>

    <Switch>
    <Route exact path={path} component={ProjectsList} />
    <Route path={`${path}/Contributions`} component={Contributions} />
    </Switch>
  </div>);
}

export default Projects;
