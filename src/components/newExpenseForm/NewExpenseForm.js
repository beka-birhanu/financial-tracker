import "../../index.css";
import FormInput from "./FormInput.js";
import FormButton from "./FormButton.js";

function NewExpenseForm() {
  return (
    <section class="max-w-4xl w-full shadow-lg">
      <form class="flex flex-col bg-violet-400 gap-6 lg:p-4 md:p-5 p-2 rounded-xl max-full">
        <div class="flex flex-col sm:flex-row gap-6 justify-between sm:gap-10">
          <FormInput type="text" label={"Title"} additionalClass=""></FormInput>
          <FormInput
            type="number"
            label={"Amount"}
            additionalClass=""
          ></FormInput>
        </div>
        <FormInput
          type="date"
          label={"Date"}
          additionalClass="sm:pr-5"
        ></FormInput>
        <FormButton>Add</FormButton>
      </form>
    </section>
  );
}

export default NewExpenseForm;
