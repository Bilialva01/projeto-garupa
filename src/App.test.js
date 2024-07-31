// src/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock dos componentes filhos
jest.mock('./components/Header/Header', () => () => <header>Header</header>);
jest.mock('./components/Footer/Footer', () => () => <footer>Footer</footer>);
jest.mock('./components/Form/Form', () => ({ handleAdd, transactionsList, total }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      handleAdd({
        id: 1,
        name: 'Test Item',
        value: '10',
        type: 'compra',
      });
    }}
  >
    <input aria-label="Nome da mercadoria" />
    <input aria-label="Valor" />
    <button type="submit">Adicionar transação</button>
    <div>{total}</div>
  </form>
));

test('renders Header, Form, and Footer components', () => {
  render(<App />);

  // Verificar se o Header está presente
  expect(screen.getByText('Header')).toBeInTheDocument();

  // Verificar se o Footer está presente
  expect(screen.getByText('Footer')).toBeInTheDocument();

  // Verificar se o Form está presente e funcional
  expect(screen.getByLabelText(/Nome da mercadoria/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Valor/i)).toBeInTheDocument();
  expect(screen.getByText('Adicionar transação')).toBeInTheDocument();

  // Preencher e enviar o formulário
  fireEvent.change(screen.getByLabelText(/Nome da mercadoria/i), { target: { value: 'Test Item' } });
  fireEvent.change(screen.getByLabelText(/Valor/i), { target: { value: '10' } });
  fireEvent.click(screen.getByText('Adicionar transação'));

  // Verificar se o total foi atualizado corretamente
  expect(screen.getByText(/- 10.00/i)).toBeInTheDocument();
});
