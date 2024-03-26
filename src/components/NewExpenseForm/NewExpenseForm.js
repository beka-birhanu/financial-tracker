import "../../index.css";
import FormInput from "./FormButton.js";
import FormButton from "./FormButton";

function NewExpenseForm() {
  return (
    <form>
      <FormInput type="text" label={Title}></FormInput>
      <FormInput type="number" label={Amount}></FormInput>
      <FormInput type="date" label={Date}></FormInput>
      <FormButton>Add</FormButton>

      {/* <label for="amount">Amount</label>
      <input type="number" name="amount" id="amount" min="0.5" />

      <label for="date">Date</label>
      <input type="date" name="date" id="date" /> */}

      {/* <button>Add</button> */}
    </form>
  );
}

export default NewExpenseForm;
