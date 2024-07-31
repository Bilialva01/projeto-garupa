// src/components/Results/Results.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Results from './Results'; // ajuste o caminho conforme necessário

// Mock do componente ResultsItem
jest.mock('../ResultsItem/ResultsItem', () => ({ title, value }) => (
  <div>
    <h2>{title}</h2>
    <p>{value}</p>
  </div>
));

describe('Results component', () => {
  const mockTotal = '1500.00';

  test('should render Results with correct values', () => {
    render(<Results total={mockTotal} />);

    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText(`R$ ${mockTotal}`)).toBeInTheDocument();
  });

  test('should not render Results items if values are not provided', () => {
    render(<Results />);

    // Verifica que os itens não são exibidos se as props não forem fornecidas
    expect(screen.queryByText('Vendas')).not.toBeInTheDocument();
    expect(screen.queryByText('Compras')).not.toBeInTheDocument();
    expect(screen.queryByText('Total')).not.toBeInTheDocument();
  });
});
