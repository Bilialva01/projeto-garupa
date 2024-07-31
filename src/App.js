import React, { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const data = localStorage.getItem('transactions');
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [total, setTotal] = useState('R$ 0.00');

  useEffect(() => {
    const valueCompras = transactionsList
      .filter((item) => item.type === 'compra')
      .map((transaction) => Number(transaction.value));

    const valueVendas = transactionsList
      .filter((item) => item.type === 'venda')
      .map((transaction) => Number(transaction.value));

    const compras = valueCompras.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const vendas = valueVendas.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(vendas - compras).toFixed(2);

    setTotal(`${Number(vendas) < Number(compras) ? '-' : ''} ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newTransactionsList = [...transactionsList, transaction];
    setTransactionsList(newTransactionsList);
    localStorage.setItem('transactions', JSON.stringify(newTransactionsList));
  };

  return (
    <>
      <Header />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} total={total} />
      <Footer />
    </>
  );
}

export default App;
