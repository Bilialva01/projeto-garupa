import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GridItem from './GridItem';

describe('GridItem Component', () => {
  test('should render GridItem with provided item', () => {
    const item = { name: 'Item 1', value: '10,00', type: 'compra' };

    render(<GridItem item={item} />);

    expect(screen.getByText('Item 1')).toBeInTheDocument();

    expect(screen.getByText('R$ 10,00')).toBeInTheDocument();
  });
});
