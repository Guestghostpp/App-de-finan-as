import React from "react";
import { GridItem } from "../GridItem/GridItem";
import * as C from "./Style";

export const Grid = ({ items, setItems }) => {
  const onDelete = (id) => {
    const newArray = items.filter((transaction) => transaction.id != id);
    setItems(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <C.table>
      <C.thead>
        <C.tr>
          <C.th width={40}>Descrição</C.th>
          <C.th width={40}>Valor</C.th>
          <C.th width={10} alignCenter>
            Tipo
          </C.th>
          <C.th width={10}></C.th>
        </C.tr>
      </C.thead>
      <C.tbody>
        {items.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.tbody>
    </C.table>
  );
};
