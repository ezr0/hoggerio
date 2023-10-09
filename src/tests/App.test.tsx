import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../routes/auth/Login';

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
