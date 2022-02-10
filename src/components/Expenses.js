import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseForm from "./ExpenseForm";
// import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  //filter year function
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  // {/* first&&second, second will be shown if 1st is true. we can store JSX content in variables */}
 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses}/>        
        <ExpensesList items={filterExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
