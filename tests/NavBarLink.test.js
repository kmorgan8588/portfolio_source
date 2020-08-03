import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavBarLink from '../src/App/components/NavBarLink';

describe('NavBarLink', () => {
  test('renders NavBarLink component', () => {
    render(<Router>
    <NavBarLink linkName="Home" key={0} />
    </Router>);

    screen.getByText("Home");
  });
})
