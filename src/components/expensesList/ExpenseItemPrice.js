import "../../index.css";

function ExpenseItemPrice(props) {
  return (
    <p
      aria-label="price"
      className="block text-xl font-bold py-2 px-3 border rounded-xl bg-purple-950"
    >
      <span>$</span>
      {props.price}
    </p>
  );
}

export default ExpenseItemPrice;
