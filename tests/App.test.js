import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App/App';
import {BrowserRouter} from 'react-router-dom'

describe('App', () => {
  test('renders App component', () => {
    render(<BrowserRouter><App /> </BrowserRouter>);

    screen.getByText('Home');
  });
})
