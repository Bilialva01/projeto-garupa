// src/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App'; // Ajuste o caminho conforme necessário

// Mock do ResultsItem
const MockResultsItem = ({ title, value }) => (
  <div>
    {title}: {value}
  </div>
);

// Mock do Results
const MockResults = ({ vendas, compras, total }) => (
  <div>
    <MockResultsItem title="Vendas" value={vendas} />
    <MockResultsItem title="Compras" value={compras} />
    <MockResultsItem title="Total" value={total} />
  </div>
);

// Mock do Header e do Form
jest.mock('./components/Header/Header', () => () => <div>Header</div>);
jest.mock('./components/Form/Form', () => ({ handleAdd }) => (
  <div>
    <button onClick={() => handleAdd({ type: 'venda', value: '100' })}>
      Adicionar transação
    </button>
  </div>
));
jest.mock('./components/Results/Results', () => MockResults);

describe('App component', () => {
  beforeEach(() => {
    // Limpa o localStorage antes de cada teste
    localStorage.clear();
  });

  test('should render Header, Form, and Results components', () => {
    render(<App />);

    // Verifica se os componentes Header, Form e Results são renderizados
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Adicionar transação')).toBeInTheDocument();
    expect(screen.getByText('Vendas: R$ 0.00')).toBeInTheDocument();
    expect(screen.getByText('Compras: R$ 0.00')).toBeInTheDocument();
    expect(screen.getByText('Total: R$ 0.00')).toBeInTheDocument();
  });

  test('should update Results when a transaction is added', async () => {
    render(<App />);

    // Adiciona uma transação e aguarda a atualização
    fireEvent.click(screen.getByText('Adicionar transação'));

    // Verifica se os valores foram atualizados corretamente
    expect(await screen.findByText('Vendas: R$ +100.00')).toBeInTheDocument();
    expect(screen.getByText('Compras: R$ -0.00')).toBeInTheDocument();
    expect(screen.getByText('Total: R$ 100.00')).toBeInTheDocument();

    // Verifica se o localStorage foi atualizado
    const storedData = localStorage.getItem('transactions');
    expect(storedData).toBeTruthy();
    const transactions = JSON.parse(storedData);
    expect(transactions).toHaveLength(1);
    expect(transactions[0]).toEqual({ type: 'venda', value: 100 });
  });
});
