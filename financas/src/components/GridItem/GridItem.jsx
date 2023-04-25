import React from "react";
import * as C from "./Style";
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaTrash,
} from "react-icons/fa";

export const GridItem = ({ item, onDelete }) => {
  return (
    <C.tr>
      <C.td>{item.desc}</C.td>
      <C.td>{item.amount}</C.td>
      <C.td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.td>
      <C.td>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.td>
    </C.tr>
  );
};
