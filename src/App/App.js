import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';

const App = (props) => (
  <div>
    <Router>
    <NavBar />
    <Profile />

    <Switch>
      <Route exact path="/" component={Home} exact />
      <Route path="/About" component={About} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Contact">
        {/* <Contact /> */}
        <div>Send email</div>
      </Route>
    </Switch>
    <Footer />
    </Router>
  </div>
);


export default App;
