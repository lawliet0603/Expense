import React, { useState } from "react";
import Expenseitem from "./Expenseitem";
import "./style/Expense.css";
import ExpensesFilter from "../Filter/expenseFilter";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [filteryear, setFilteryear] = useState([]);
  const [filterData, setFilterData] = useState(props.expense);

  const filterChanger = (year) => {
    setFilteryear(year);
    year === "All"
      ? setFilterData(props.expense)
      : setFilterData(
          props.expense.filter((i) => i.date.getFullYear().toString() === year)
        );
  };

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter seleted={filteryear} filterChanger={filterChanger} />
        <ExpenseChart expense={filterData} />
      </div>
      {filterData.map((data) => (
        <div className="expenses" key={data.id}>
          <Expenseitem
            key={data.id}
            Title={data.title}
            dateTime={data.date}
            Amount={data.amount}
          />
        </div>
      ))}
    </div>
  );
}

export default Expense;
