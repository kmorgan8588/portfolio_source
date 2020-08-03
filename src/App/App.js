import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Switch, Route } from 'react-router-dom';

const App = (props) => (
  <div>
    <NavBar />
    {/* <Profile /> */}

    <Switch>
      <Route exact path="/">
        {/* <Home /> */}
      </Route>
      <Route path="/about">
        {/* <About /> */}
      </Route>
      <Route path="/projects">
        {/* <Projects /> */}
      </Route>
      <Route path="/contact">
        {/* <Contact /> */}
      </Route>
    </Switch>
    {/* <Footer /> */}
  </div>
)


export default App;
