// src/components/Results/Results.js
import React from 'react';
import ResultsItem from '../ResultsItem/ResultsItem'; // ajuste o caminho conforme necessário

const Results = ({ vendas, compras, total }) => {
  return (
    <div>
      {vendas !== undefined && vendas !== null && (
        <ResultsItem title="Vendas" value={`${vendas}`} />
      )}
      {compras !== undefined && compras !== null && (
        <ResultsItem title="Compras" value={`${compras}`} />
      )}
      {total !== undefined && total !== null && (
        <ResultsItem title="Total" value={`${total}`} />
      )}
    </div>
  );
};

export default Results;
