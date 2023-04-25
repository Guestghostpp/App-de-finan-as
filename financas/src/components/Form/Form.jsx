import * as C from "./Styles";
import { useState } from "react";
import { Grid } from "../Grid/Grid"

export const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [iseExpense, setExpense] = useState(false);

  const generateId = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O numero tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateId(),
      desc: desc,
      amount: amount,
      expense: iseExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!iseExpense)}
          />
          <C.Label>Entrada</C.Label>
          <C.input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!iseExpense)}
          />
          <C.Label>Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={() => handleSave()}>Adicionar</C.Button>
      </C.Container>
      <Grid items={transactionsList} setItems={setTransactionsList} />
    </>
  );
};
