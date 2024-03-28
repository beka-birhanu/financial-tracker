import "./index.css";
import NewExpenseForm from "./components/newExpenseForm/NewExpenseForm";
import ExpensesList from "./components/expensesList/ExpensesList";
import { useState } from "react";

const demoData = [
  {
    id: "751021a1-c7b5-4d42-83d6-73a3397aca28",

    date: new Date("2020-01-01"),
    title: "new car",
    price: 2400,
  },
  {
    id: "103091de-89cd-44fb-bd0d-43761e13da69",

    date: new Date("2020-03-15"),
    title: "used motorcycle",
    price: 1500,
  },
  {
    id: "32882953-baee-40a4-b6e9-225b1a03e152",

    date: new Date("2020-06-10"),
    title: "vintage bicycle",
    price: 500,
  },
  {
    id: "85c5def5-33be-4f83-8509-8f3245e6b07f",

    date: new Date("2020-09-20"),
    title: "luxury yacht",
    price: 100000,
  },
  {
    id: "dbb5b0aa-def7-4522-8f66-d3fca2e6bc1f",

    date: new Date("2021-01-05"),
    title: "sports car",
    price: 50000,
  },
  {
    id: "3158656c-90de-4139-9baa-3f2a5f32a59e",

    date: new Date("2021-04-22"),
    title: "electric scooter",
    price: 800,
  },
  {
    id: "6bad9e62-8f9d-401d-84e9-a8a886952baa",

    date: new Date("2021-07-15"),
    title: "compact sedan",
    price: 18000,
  },
  {
    id: "1148e8ce-82bb-4bf7-8ba6-47c7f10ad69c",

    date: new Date("2022-01-10"),
    title: "motorhome",
    price: 70000,
  },
  {
    id: "e7f32f42-8c61-470a-975a-88d219a09c81",

    date: new Date("2022-04-03"),
    title: "vintage convertible",
    price: 30000,
  },
  {
    id: "21d2bddb-71d5-44a9-a696-370a9ac386e3",

    date: new Date("2022-08-28"),
    title: "luxury SUV",
    price: 90000,
  },
  {
    id: "fe15510b-1b0f-4c05-8e2b-be784ca69c4d",

    date: new Date("2023-02-20"),
    title: "hybrid hatchback",
    price: 25000,
  },
  {
    id: "5b7e98c4-590a-44ff-8429-5d808d4ab9b4",

    date: new Date("2023-09-05"),
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
