// src/components/Form/Form.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('submits the form with valid data', () => {
  const handleAdd = jest.fn();
  const transactionsList = [];
  const total = 'R$ 0.00';

  render(<Form handleAdd={handleAdd} transactionsList={transactionsList} total={total} />);

  // Preencher o formulário
  fireEvent.change(screen.getByLabelText(/Nome da mercadoria/i), { target: { value: 'Mercadoria 1' } });
  fireEvent.change(screen.getByLabelText(/Valor/i), { target: { value: '100' } });
  fireEvent.click(screen.getByText('Adicionar transação'));

  // Verificar se os campos foram limpos após o envio
  expect(screen.getByLabelText(/Nome da mercadoria/i).value).toBe('');
  expect(screen.getByLabelText(/Valor/i).value).toBe('');
});
