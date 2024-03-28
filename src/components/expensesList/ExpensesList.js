import React, { useState } from "react";
import Filter from "./ExpensesListFilter.js";
import ExpenseItem from "./ExpenseItem.js";

function ExpensesList(props) {
  const expenses = props.expenses;

  // Extract the unique years from expenses
  const years = Array.from(
    new Set(expenses.map((expense) => expense.date.getFullYear()))
  );

  const [currentFilter, setCurrentFilter] = useState(0); // Initialize to null

  const filteredExpenses = expenses.filter((expense) => {
    // Check if there's no filter chosen yet
    if (currentFilter === 0) {
      return true;
    }
    // Check if the expense's year matches the current filter
    return expense.date.getFullYear() === currentFilter;
  });

  // Sorting filteredExpenses by date in descending order
  filteredExpenses.sort((a, b) => b.date - a.date);

  let expenseItems = (
    <p className="text-3xl text-center font-extrabold">No data found</p>
  );

  if (filteredExpenses.length > 0) {
    expenseItems = filteredExpenses.map((filteredExpense) => (
      <ExpenseItem
        key={filteredExpense.id} // Assuming each expense object has an id property
        date={filteredExpense.date}
        title={filteredExpense.title}
        price={filteredExpense.price}
      />
    ));
  }

  return (
    <section className="max-w-4xl w-full text-white bg-stone-800 shadow-lg rounded-xl p-6 grid gap-6">
      <header className="flex justify-between p-2">
        <label htmlFor="filter" className="font-semibold">
          Filter by year
        </label>
        <Filter
          name="filter"
          id="filter"
          years={years}
          onSelect={setCurrentFilter}
        />
      </header>

      <main className="grid gap-6">{expenseItems}</main>
    </section>
  );
}

export default ExpensesList;
