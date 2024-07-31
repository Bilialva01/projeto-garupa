import React, { useState } from "react";
import Grid from "../Grid/Grid";

const Form = ({ handleAdd, transactionsList, total }) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [compra, setCompra] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();

    if (!name || !value) {
      alert("Informe o nome e o valor!");
      return;
    } else if (value < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: Math.round(Math.random() * 1000),
      name,
      value: parseFloat(value),
      type: compra ? "compra" : "venda",
    };

    handleAdd(transaction);

    setName("");
    setValue("");
    setCompra(true);
  };

  return (
    <section id="form">
      <form id="transactionForm" onSubmit={handleSave}>
        <div className="inputsBase">
          <label htmlFor="transactionType">Tipo de transação</label>
          <select
            id="transactionType"
            onChange={(e) => setCompra(e.target.value === "compra")}
            value={compra ? "compra" : "venda"}
          >
            <option value="compra">Compra</option>
            <option value="venda">Venda</option>
          </select>
        </div>
        <div className="inputsBase Name">
          <label htmlFor="name">Nome da mercadoria</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputsBase">
          <label htmlFor="value">Valor</label>
          <input
            type="number"
            id="value"
            value={value}
            placeholder="R$ 0,00"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div id="btnBase">
          <button id="btn" type="submit">Adicionar transação</button>
        </div>
      </form>
      <Grid itens={transactionsList} total={total} /> 
    </section>
  );
};

export default Form;
