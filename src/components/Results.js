import ResultsItem from "./ResultsItem";

const Results = ({ vendas, compras, total }) => {
  return (
    <div>
      <ResultsItem title="Vendas" value={vendas} />
      <ResultsItem title="Compras" value={compras} />
      <ResultsItem title="Total" value={total} />
    </div>
  );
};

export default Results;
