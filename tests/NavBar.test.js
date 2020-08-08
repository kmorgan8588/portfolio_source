import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from '../src/App/components/NavBar';

describe('NavBar', () => {
  test('renders NavBar component', () => {
    render(<Router><NavBar /></Router>);

    screen.getByText('Home');
    screen.getByText('Projects');
    screen.getByText('Contact');
    screen.getByText('About');
  });

  test
})
