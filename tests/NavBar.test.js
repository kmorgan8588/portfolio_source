import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../src/App/components/NavBar';

describe('NavBar', () => {
  test('renders NavBar component', () => {
    render(<NavBar />);

    screen.getByText('Home');
    screen.getByText('Projects');
    screen.getByText('Contact');
    screen.getByText('About');
  });

  test
})
