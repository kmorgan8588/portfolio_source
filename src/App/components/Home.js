import React from 'react';

const Home = (props) => (
<div id="content">
    <h1>Welcome!</h1>
    <hr/>
    <h3>My name is Kyle Morgan, software engineer extraordinaire</h3>
    <p>
    Regarding this site: If you're interested in viewing the source code or see something that needs to be fixed, visit the site's {' '}
      <a target="_blank" href="https://github.com/kmorgan8588/portfolio_source">GitHub repo</a>.
     </p>
     <h4>Technologies Used:</h4>
     <ul>
       <li>React</li>
       <li>React-Router</li>
       <li>Express</li>
       <li>NodeMailer</li>
       <li>Docker</li>
       <li>Nginx</li>
       <li>AWS</li>
     </ul>
  </div>
)

export default Home;

