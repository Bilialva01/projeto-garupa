// src/components/GridItem/GridItem.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GridItem from './GridItem'; // ajuste o caminho conforme necessário

const mockItem = {
  name: 'Item 1',
  value: 'R$10,00'
};

describe('GridItem component', () => {
  test('should render GridItem with provided item', () => {
    render(
      <table>
        <tbody>
          <GridItem item={mockItem} />
        </tbody>
      </table>
    );

    // Verifica se os valores do item estão sendo exibidos corretamente
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('R$10,00')).toBeInTheDocument();
  });
});
