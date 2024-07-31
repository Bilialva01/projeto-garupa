// Grid.js
import React from "react";
import GridItem from "../GridItem/GridItem";
import Results from "../Results/Results";

const Grid = ({ itens, total }) => {
  const reversedItens = itens ? [...itens].reverse() : [];

  return (
    <section id="grade">
      <h1>Extrato de transações</h1>
      <table>
        <thead>
          <tr>
            <th>Mercadoria</th>
            <th id="value">Valor</th>
          </tr>
        </thead>
        <tbody>
          {reversedItens.map((item, index) => (
            <GridItem key={index} item={item} />
          ))}
        </tbody>
      </table>
      <hr />
      <Results total={total} />
    </section>
  );
};

export default Grid;
