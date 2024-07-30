
const GridItem = ({ item }) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.value}</td>
        <td>{item.compras}</td>
      </tr>
    );
  };
  
  export default GridItem;
  