// Header.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header'; // ajuste o caminho conforme necessário

describe('Header component', () => {
  test('should render Header with correct title', () => {
    render(<Header />);

    // Verifica se o texto "Header" está sendo exibido corretamente
    expect(screen.getByText('Controle Financeiro')).toBeInTheDocument();
  });
});
