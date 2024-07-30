// src/components/Grid/Grid.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Grid from './Grid'; // ajuste o caminho conforme necessário
import GridItem from '../GridItem/GridItem'; // ajuste o caminho conforme necessário

// Mock do GridItem para testar Grid
jest.mock('../GridItem/GridItem', () => ({ item }) => (
  <tr>
    <td>{item.name}</td>
    <td>{item.value}</td>
  </tr>
));

const mockItems = [
  { name: 'Item 1', value: 'R$10,00' },
  { name: 'Item 2', value: 'R$20,00' }
];

describe('Grid component', () => {
  test('should render Grid with GridItems', () => {
    render(<Grid itens={mockItems} />);

    // Verifica se os itens estão sendo renderizados corretamente
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('R$10,00')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('R$20,00')).toBeInTheDocument();
  });

  test('should render empty table when no items are provided', () => {
    render(<Grid itens={[]} />);

    // Verifica que a tabela está vazia
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    expect(screen.queryByText('R$10,00')).not.toBeInTheDocument();
  });
});
