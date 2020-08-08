import React from 'react';

const ProjectsList = (props) => (
  <ul className="projects">
    <li id="project">
      <h4>Zilhome</h4>
      <a title="This is a link" target="_blank" href="https://github.com/1021s/Kyle-proxy">
      <img id="project-img" src="https://kmorgan-portfolio-images.s3-us-west-2.amazonaws.com/zilhomeProxy.jpg" height="" width=""/></a>
    <p>
      <a title="This is a link" target="_blank" href="https://github.com/1021s/Kyle-proxy">Proxy</a> {' '}
      <a title="This is a link" target="_blank" href="https://github.com/1021s/Kyle-service">Microservice</a> {' '}
      <a title="This is a link" target="_blank" href="https://github.com/kmorgan8588/FEC">Remastered</a>
    </p>
    <p>
      An open source home-listing service.  The proxy page supports five microservices that populate the page with
      all the necessary information.  All microservices were built from the ground up using React.js, HTML, and CSS.  The
      servers are powered by Node.js and Express, with each microservice being handled by a different server and database.
      The remastered version takes the Node/Express server and refactors it in C# and the .NET framework.
    </p>
    <p>
      Deployed with Docker to Amazon Web Services using EC2 instances.
    </p>
      <h5>Status: Currently not deployed</h5>
  </li>
    <li id="project">
      <h4>Better Homes and Hackers</h4>
      <a title="This is a link" target="_blank" href="https://github.com/1021sdc/Kyle-proxy">
      <img id="project-img" src="https://kmorgan-portfolio-images.s3-us-west-2.amazonaws.com/betterhomes.png" height="" width=""/></a>
      <p>
        <a title="This is a link" target="_blank" href="https://github.com/1021sdc/Kyle-proxy">Proxy</a> {' '}
        <a title="This is a link" target="_blank" href="https://github.com/1021sdc/better-info">Microservice</a>
      </p>
      <p>
        An inherited code base project.  The primary effort was to revamp the backend infrastructure with an emphasis
        on building out a scalable system during deployment.  All microservices were scaled individually and by hand
        as a learning exercise in system design.
      </p>
      <p>
        Deployed with Docker to Amazon Web Services using EC2 instances.
      </p>
        <h3>Structure:</h3>
        <ul>
          <li>Load Balancer - Nginx</li>
          <li>Database - Postgres on one instance</li>
          <li>Servers - Three Node/Express</li>
          <li>Caching - Not implemented before project time limit</li>
          <li>Testing - Loader.io and NewRelic</li>
        </ul>
      <h5>Status: Currently not deployed</h5>
    </li>
      <li id="project">
        <h4>Dice Dice Baby</h4>
        <a title="This is a link" target="_blank" href="https://github.com/kmorgan8588">
        <img id="project-img" src="https://kmorgan-portfolio-images.s3-us-west-2.amazonaws.com/dicedicebaby.jpg" height="" width=""/></a>
        <p>
          Project is currently private.  View more public projects on my <a href="https://github.com/kmorgan8588" target="_blank">Github</a>.
        </p>
        <p>
          A dice rolling application built from the ground up using React.js with Material UI.  Allows the user to select
           from various types of dice to roll.  With a persistent rolling history, powered by MongoDB/Mongoose, with the option to turn back
          time and re-roll for a <strong>hopefully</strong>{' '} better result from directly in the history.
        </p>
          <h5>Status: Currently not deployed</h5>
      </li>
  </ul>
)

export default ProjectsList;
