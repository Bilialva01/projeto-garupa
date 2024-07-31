import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Header from './Header'; 

test('toggles navigation menu visibility on button clicks', () => {
  render(<Header />);

  const toggleButton = screen.getByRole('button', { name: /menu icon/i });
  fireEvent.click(toggleButton);

  const nav = screen.getByRole('navigation');
  expect(nav).toHaveClass('visible');

  fireEvent.click(toggleButton);

  expect(nav).not.toHaveClass('visible');
});
