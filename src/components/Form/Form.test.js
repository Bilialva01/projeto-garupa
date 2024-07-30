// Form.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form'; // Certifique-se de que o caminho está correto

describe('Form Component', () => {
  const handleAdd = jest.fn();
  const transactionsList = [];

  beforeEach(() => {
    handleAdd.mockClear();
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders form elements correctly', () => {
    render(<Form handleAdd={handleAdd} transactionsList={transactionsList} />);

    expect(screen.getByLabelText(/Tipo de transação/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nome de mercadoria/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Valor/i)).toBeInTheDocument();
    expect(screen.getByText(/Adicionar transação/i)).toBeInTheDocument();
  });

  test('shows alert if name or value is missing', () => {
    render(<Form handleAdd={handleAdd} transactionsList={transactionsList} />);

    const addButton = screen.getByText(/Adicionar transação/i);
    fireEvent.click(addButton);

    expect(window.alert).toHaveBeenCalledWith("Informe o nome e o valor!");
  });

  test('shows alert if value is not positive', () => {
    render(<Form handleAdd={handleAdd} transactionsList={transactionsList} />);

    fireEvent.change(screen.getByLabelText(/Nome de mercadoria/i), { target: { value: 'Mercadoria' } });
    fireEvent.change(screen.getByLabelText(/Valor/i), { target: { value: '-1' } });
    fireEvent.click(screen.getByText(/Adicionar transação/i));

    expect(window.alert).toHaveBeenCalledWith("O valor tem que ser positivo!");
  });

  test('calls handleAdd with correct data when form is submitted', () => {
    render(<Form handleAdd={handleAdd} transactionsList={transactionsList} />);

    fireEvent.change(screen.getByLabelText(/Nome de mercadoria/i), { target: { value: 'Mercadoria' } });
    fireEvent.change(screen.getByLabelText(/Valor/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/Tipo de transação/i), { target: { value: 'venda' } });

    fireEvent.click(screen.getByText(/Adicionar transação/i));

    expect(handleAdd).toHaveBeenCalledWith({
      id: expect.any(Number),
      name: 'Mercadoria',
      value: 100,
      type: 'venda',
    });
  });

  test('resets form fields after submission', () => {
    render(<Form handleAdd={handleAdd} transactionsList={transactionsList} />);

    fireEvent.change(screen.getByLabelText(/Nome de mercadoria/i), { target: { value: 'Mercadoria' } });
    fireEvent.change(screen.getByLabelText(/Valor/i), { target: { value: '100' } });
    fireEvent.click(screen.getByText(/Adicionar transação/i));

    expect(screen.getByLabelText(/Nome de mercadoria/i).value).toBe('');
    expect(screen.getByLabelText(/Valor/i).value).toBe('');
    expect(screen.getByLabelText(/Tipo de transação/i).value).toBe('compra'); // Ajuste se necessário
  });
});
