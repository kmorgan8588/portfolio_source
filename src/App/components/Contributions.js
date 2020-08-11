import React from 'react';
import { Link } from 'react-router-dom';

const Contributions = (props) => {
  return (
    <div>
    <h1>Contributions</h1>
    <hr/>
    <ul className="project-contribution">
      <li>
        <Link to='/Projects'>View Projects</Link>
      </li>
    </ul>
      <h3>Volunteering</h3>
      <p>
        I'm currently volunteering for Washington's Conviction Vacation project.  They aren't in a development phase,
        so I mostly get to hear about user research and keep up to date for when there's some work that I can take part in.
      </p>
      <p>
        See the project listing on <a target="_blank" href="https://www.democracylab.org/index/?section=Home">Democracy Lab</a> {' '}
        and to check out other non profit opportunities.
      </p>
      <h3>Open Source</h3>
      <p>
        I recently added some functionality to <a target="_blank" href="https://www.pronounly.co/">Pronounly</a> {' '}
        and am exploring some other projects as well when I have time.
      </p>

    </div>
  );
}

export default Contributions;
