import GridItem from "../GridItem/GridItem"

const Grid = ({itens}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Mercadoria</th>
                    <th>Valor</th>
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