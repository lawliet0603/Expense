import React, { useState } from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import dataUse from "./components/Data/dataset";

function App() {
  const [newData, setNewdata] = useState(dataUse);

  const somthing = (newData) => {
    setNewdata((prev) => {
      return [newData, ...prev];
    });
  };
  return (
    <div>
      <NewExpense something={somthing} />
      <div>
        <Expense expense={newData} />
      </div>
    </div>
  );
}

export default App;
