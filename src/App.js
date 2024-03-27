import "./index.css";
import NewExpenseForm from "./components/newExpenseForm/NewExpenseForm";
import ExpensesList from "./components/expensesList/ExpensesList";

function App() {
  return (
    <main class="flex flex-col md:mt-10 sm:mt-8 mt-0 items-center gap-11 text-lg">
      <NewExpenseForm></NewExpenseForm>
      <ExpensesList></ExpensesList>
    </main>
  );
}

export default App;
