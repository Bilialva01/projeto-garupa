import React from "react";

const GridItem = ({ item }) => {
  const typeClass = item.type === 'venda' ? 'venda' : item.type === 'compra' ? 'compra' : '';

  return (
    <>
      <tr>
        <td className={typeClass}>{item.name}</td>
        <td className="valor">R$ {item.value}</td>
      </tr>
    </>
  );
};

export default GridItem;
