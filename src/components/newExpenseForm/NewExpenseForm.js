import "../../index.css";
import FormInput from "./FormInput.js";
import FormButton from "./FormButton.js";
import { useState } from "react";

function NewExpenseForm(props) {
  function submitHandler(event) {
    event.preventDefault();

    const newExpense = {
      id: uuidv4(),
      date: new Date(enteredDate),
      title: enteredTitile,
      price: parseInt(enteredAmount),
    };

    props.onSubmit((prevData) => {
      return [...prevData, newExpense];
    });

    // Reset form fields after submission
    setEnteredTitile("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  const { v4: uuidv4 } = require("uuid");
  const [enteredTitile, setEnteredTitile] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  return (
    <section className="max-w-4xl w-full shadow-lg">
      <form
        className="flex flex-col bg-violet-400 gap-6 lg:p-4 md:p-5 p-2 rounded-xl max-full"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-between sm:gap-10">
          <FormInput
            type="text"
            label={"Title"}
            additionalClass=""
            onChange={setEnteredTitile}
            value={enteredTitile}
          ></FormInput>
          <FormInput
            type="number"
            label={"Amount"}
            additionalClass=""
            onChange={setEnteredAmount}
            value={enteredAmount}
          ></FormInput>
        </div>
        <FormInput
          type="date"
          label={"Date"}
          additionalClass="sm:pr-5"
          onChange={setEnteredDate}
          value={enteredDate}
        ></FormInput>
        <FormButton>Add</FormButton>
      </form>
    </section>
  );
}

export default NewExpenseForm;
