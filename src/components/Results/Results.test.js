import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Results from './Results';

describe('Results Component', () => {
  test('renders total value when total is provided', () => {
    render(<Results total={100} />);

    expect(screen.getByText(/Total:/i)).toBeInTheDocument();

    expect(screen.getByText(/R\$ 100/i)).toBeInTheDocument();

    expect(screen.getByText(/\[LUCRO\]/i)).toBeInTheDocument();
  });

  test('does not render anything when total is undefined', () => {
    render(<Results total={undefined} />);

    expect(screen.queryByText(/Total:/i)).toBeNull();
    expect(screen.queryByText(/R\$ 100/i)).toBeNull();
    expect(screen.queryByText(/\[LUCRO\]/i)).toBeNull();
  });

  test('does not render anything when total is null', () => {
    render(<Results total={null} />);

    expect(screen.queryByText(/Total:/i)).toBeNull();
    expect(screen.queryByText(/R\$ 100/i)).toBeNull();
    expect(screen.queryByText(/\[LUCRO\]/i)).toBeNull();
  });
});
