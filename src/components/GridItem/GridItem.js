// src/components/GridItem/GridItem.js
import React from "react";

const GridItem = ({ item }) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.value}</td>
        </tr>
    );
};

export default GridItem;
