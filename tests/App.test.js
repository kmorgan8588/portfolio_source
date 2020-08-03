import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App/App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    screen.getByText('Kyle Morgan');
  });
})
