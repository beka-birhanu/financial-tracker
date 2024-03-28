import "../../index.css";
import ExpenseItemDate from "./ExpenseItemDate";
import ExpenseItemPrice from "./ExpenseItemPrice";

function ExpenseItem(props) {
  return (
    <section className="flex justify-between items-center bg-neutral-600 p-2 rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow">
      <div className="flex gap-5 items-center">
        <ExpenseItemDate date={props.date}></ExpenseItemDate>

        <h2 aria-label="expense title" className="text-xl font-bold">
          {props.title}
        </h2>
      </div>
      <ExpenseItemPrice price={props.price}></ExpenseItemPrice>
    </section>
  );
}

export default ExpenseItem;
