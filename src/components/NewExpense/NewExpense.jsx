import React from "react";
import "./style/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const getData1 = (savedData) => {
    const newData = { ...savedData, id: Math.random().toString() };
    props.something(newData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm getData0={getData1} />
    </div>
  );
};

export default NewExpense;
