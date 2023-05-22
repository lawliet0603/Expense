import React, { useState } from "react";
import "./style/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setuserInput] = useState({
    titleName: "",
    amountName: "",
    dateName: "",
  });
  const titleSet = (events) =>
    setuserInput((prev) => {
      return { ...prev, titleName: events.target.value };
    });
  const amountSet = (events) =>
    setuserInput((prev) => {
      return { ...prev, amountName: events.target.value };
    });
  const dateSet = (events) =>
    setuserInput((prev) => {
      return { ...prev, dateName: events.target.value };
    });

  const formSubmit = (event) => {
    event.preventDefault();
    const formExpend = {
      title: userInput.titleName,
      amount: +userInput.amountName,
      date: new Date(userInput.dateName),
    };
    console.log(formExpend);
    if (
      userInput === "" ||
      userInput.titleName === "" ||
      userInput.amountName === "" ||
      userInput.dateName === ""
    ) {
      return console.log("None send");
    } else props.getData0(formExpend);
    setuserInput({ titleName: "", amountName: "", dateName: "" });
  };
  const dataForm = () => {
    return (
      <form onSubmit={formSubmit}>
        <div className="new-expense__control">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleSet}
              value={userInput.titleName}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              onChange={amountSet}
              value={userInput.amountName}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" onChange={dateSet} value={userInput.dateName} />
          </div>
          <div className="new-expense__actions">
            <button
              onClick={() => {
                setbtnSituation(false);
              }}
            >
              Cancel
            </button>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    );
  };
  const btnSubmit1 = () => {
    return (
      <button
        onClick={() => {
          setbtnSituation(true);
        }}
      >
        {" "}
        Add expense
      </button>
    );
  };
  const [btnSituation, setbtnSituation] = useState(false);
  return <div>{btnSituation ? dataForm() : btnSubmit1()}</div>;
};

export default ExpenseForm;
