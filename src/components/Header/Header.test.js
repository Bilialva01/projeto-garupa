import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Header from './Header'; // ajuste o caminho conforme necessário

test('toggles navigation menu visibility on button clicks', () => {
  render(<Header />);

  // Encontre o botão do menu e clique nele para mostrar o menu
  const toggleButton = screen.getByRole('button', { name: /menu icon/i });
  fireEvent.click(toggleButton);

  // Verifique se o menu de navegação está visível
  const nav = screen.getByRole('navigation');
  expect(nav).toHaveClass('visible');

  // Clique novamente no botão do menu para ocultar o menu
  fireEvent.click(toggleButton);

  // Verifique se o menu de navegação não está visível
  expect(nav).not.toHaveClass('visible');
});
