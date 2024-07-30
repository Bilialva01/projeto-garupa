import GridItem from "./GridItem"

const Grid = ({itens}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Mercadoria</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                {itens?.map((item, index) => (
                <GridItem key={index} item={item} />
                ))}
            </tbody>
        </table>
    )
};

export default Grid;