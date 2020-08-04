import React from 'react';
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import App from '../src/App/App';
import {BrowserRouter} from 'react-router-dom'

describe('App', () => {
  test('renders App component', () => {
    render(<BrowserRouter><App /> </BrowserRouter>);

    screen.getByText('Home');
    screen.getByAltText('Picture of Kyle Morgan with brick wall background')
  });

  test('Routes to correct Link on click', () => {
    render(<BrowserRouter><App /> </BrowserRouter>);


    const textEl = screen.getByText('Projects');
    fireEvent.click(textEl);
    screen.getByText('DiceDiceBaby');
  })
})
