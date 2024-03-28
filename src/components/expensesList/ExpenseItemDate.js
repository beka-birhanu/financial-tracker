import "../../index.css";

function ExpenseItemDate(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("default", { month: "short" });
  const date = props.date.getDate();

  return (
    <time
      dateTime="yyyy-dd-mm"
      className="border py-2 px-6 rounded-2xl bg-stone-800"
    >
      <div className="text-sm font-bold text-center">{month}</div>
      <div className="text-sm text-center">{year}</div>
      <div className="text-2xl font-extrabold text-center">{date}</div>
    </time>
  );
}

export default ExpenseItemDate;
