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
  const mockVendas = '1000.00';
  const mockCompras = '500.00';
  const mockTotal = '1500.00';

  test('should render Results with correct values', () => {
    render(<Results vendas={mockVendas} compras={mockCompras} total={mockTotal} />);

    // Verifica se cada item está sendo exibido corretamente
    expect(screen.getByText('Vendas')).toBeInTheDocument();
    expect(screen.getByText(`R$ ${mockVendas}`)).toBeInTheDocument();

    expect(screen.getByText('Compras')).toBeInTheDocument();
    expect(screen.getByText(`R$ ${mockCompras}`)).toBeInTheDocument();

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
