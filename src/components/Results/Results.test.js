// src/components/Results/Results.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Results from './Results';

describe('Results Component', () => {
  test('renders total value when total is provided', () => {
    render(<Results total={100} />);

    // Verifica se a label "Total:" está presente
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();

    // Verifica se o valor total está presente e formatado corretamente
    expect(screen.getByText(/R\$ 100/i)).toBeInTheDocument();

    // Verifica se o texto "[LUCRO]" está presente
    expect(screen.getByText(/\[LUCRO\]/i)).toBeInTheDocument();
  });

  test('does not render anything when total is undefined', () => {
    render(<Results total={undefined} />);

    // Verifica se o componente não renderiza nada
    expect(screen.queryByText(/Total:/i)).toBeNull();
    expect(screen.queryByText(/R\$ 100/i)).toBeNull();
    expect(screen.queryByText(/\[LUCRO\]/i)).toBeNull();
  });

  test('does not render anything when total is null', () => {
    render(<Results total={null} />);

    // Verifica se o componente não renderiza nada
    expect(screen.queryByText(/Total:/i)).toBeNull();
    expect(screen.queryByText(/R\$ 100/i)).toBeNull();
    expect(screen.queryByText(/\[LUCRO\]/i)).toBeNull();
  });
});
