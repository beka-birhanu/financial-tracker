import "./index.css";
import NewExpenseForm from "./components/newExpenseForm/NewExpenseForm";
import ExpensesList from "./components/expensesList/ExpensesList";
import { useState } from "react";

const demoData = [
  {
    id: "32882953-baee-40a4-b6e9-225b1a03e152",

    date: new Date("2020-06-10"),
    title: "vintage bicycle",
    price: 500,
  },

  {
    id: "3158656c-90de-4139-9baa-3f2a5f32a59e",

    date: new Date("2021-04-22"),
    title: "electric scooter",
    price: 800,
  },

  {
    id: "e7f32f42-8c61-470a-975a-88d219a09c81",

    date: new Date("2022-04-03"),
    title: "vintage convertible",
    price: 30000,
  },

  {
    id: "fe15510b-1b0f-4c05-8e2b-be784ca69c4d",

    date: new Date("2023-02-20"),
    title: "hybrid hatchback",
    price: 25000,
  },
  {
    id: "5b7e98c4-590a-44ff-8429-5d808d4ab9b4",

    date: new Date("2024-09-05"),
    title: "electric bike",
    price: 1200,
  },
];

// const { v4: uuidv4 } = require("uuid");

// const demoDataWithIds = demoData.map((item) => ({
//   id: uuidv4(),
//   ...item,
// }));
function App() {
  const [expenses, setExpenses] = useState(demoData);

  return (
    <main className="flex flex-col md:mt-10 sm:mt-8 mt-0 items-center gap-11 text-lg">
      <NewExpenseForm onSubmit={setExpenses}></NewExpenseForm>
      <ExpensesList expenses={expenses}></ExpensesList>
    </main>
  );
}

export default App;
