import "../../index.css";
import ExpenseItemDate from "./ExpenseItemDate";
import ExpenseItemPrice from "./ExpenseItemPrice";

function ExpenseItem() {
  return (
    <section class="flex justify-between items-center bg-neutral-600 p-2 rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow">
      <div class="flex gap-5 items-center">
        <ExpenseItemDate></ExpenseItemDate>

        <h2 aria-label="expense title" class="text-xl font-bold">
          new car
        </h2>
      </div>
      <ExpenseItemPrice></ExpenseItemPrice>
    </section>
  );
}

export default ExpenseItem;
