import "../../index.css";
import Filter from "./ExpensesListFilter.js";
import ExpenseItem from "./ExpenseItem.js";

function ExpensesList() {
  return (
    <section class="max-w-4xl w-full text-white bg-stone-800 shadow-lg rounded-xl p-6 grid gap-6">
      <header class="flex justify-between p-2">
        <label for="filter" class="font-semibold">
          Filter by year
        </label>
        <Filter name="filter" id="filter"></Filter>
      </header>

      <main class="grid gap-6">
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
      </main>
    </section>
  );
}

export default ExpensesList;
