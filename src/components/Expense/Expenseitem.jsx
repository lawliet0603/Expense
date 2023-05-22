import React from "react";
import "./style/Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";

function Expenseitem(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item">
        <ExpenseDate date={props.dateTime} />
        <div className="expense-item__description">
          <h2>{props.Title}</h2>
        </div>
        <div className="expense-item__price">{props.Amount}</div>
      </div>
      <button onClick={() => {}}>Click here</button>
    </Card>
  );
}
export default Expenseitem;
