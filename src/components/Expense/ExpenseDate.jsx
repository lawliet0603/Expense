import React from "react";
import "./style/ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("default", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("default", { day: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
