// ResultsItem.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultsItem from './ResultsItem'; // ajuste o caminho conforme necessário

describe('ResultsItem component', () => {
  const mockTitle = 'Vendas';
  const mockValue = 'R$1000';

  test('should render ResultsItem with correct title and value', () => {
    render(<ResultsItem title={mockTitle} value={mockValue} />);

    // Verifica se o título e o valor estão sendo exibidos corretamente
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.getByText(mockValue)).toBeInTheDocument();
  });

  test('should not render ResultsItem if title and value are not provided', () => {
    render(<ResultsItem title="" value="" />);

    // Verifica que nada é exibido se o título e o valor estiverem vazios
    expect(screen.queryByText(mockTitle)).not.toBeInTheDocument();
    expect(screen.queryByText(mockValue)).not.toBeInTheDocument();
  });
});
