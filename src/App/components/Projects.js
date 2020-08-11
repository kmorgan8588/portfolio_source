import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ProjectsList from './ProjectsList';
import Contributions from './Contributions';

const Projects = (props) => {
  const { path } = useRouteMatch();

  return (<div>
    <Switch>
    <Route exact path={path} component={ProjectsList} />
    <Route path={`${path}/Contributions`} component={Contributions} />
    </Switch>
  </div>);
}

export default Projects;
