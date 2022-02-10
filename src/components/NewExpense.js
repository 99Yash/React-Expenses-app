import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const [editing, setEditing] = useState(false);
  const startEditHandler = () => {
    setEditing(true);
  };

  const stopEditHandler = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!editing && <button onClick={startEditHandler}>Add New Expense</button>}
      {editing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
