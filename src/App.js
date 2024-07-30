import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [vendas, setVendas] = useState(0);
  const [compras, setCompras] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const valueCompras = transactionsList
      .filter((item) => item.type === "compra")
      .map((transaction) => Number(transaction.value));

    const valueVendas = transactionsList
      .filter((item) => item.type === "venda")
      .map((transaction) => Number(transaction.value));

    const compras = valueCompras.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const vendas = valueVendas.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(vendas - compras).toFixed(2);

    setCompras(`R$ -${compras}`);
    setVendas(`R$ +${vendas}`);
    setTotal(`${Number(vendas) < Number(compras) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  return (
    <>
      <Header />
      <Form
        transactionsList={transactionsList}
      />
      <Results vendas={vendas} compras={compras} total={total} />
    </>
  );
}

export default App;
