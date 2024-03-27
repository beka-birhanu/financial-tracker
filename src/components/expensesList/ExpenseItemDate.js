import "../../index.css";

function ExpenseItemDate() {
  return (
    <time
      datetime="yyyy-dd-mm"
      class="border py-2 px-6 rounded-2xl bg-stone-800"
    >
      <div class="text-sm font-bold text-center">March</div>
      <div class="text-sm text-center">2024</div>
      <div class="text-2xl font-extrabold text-center">27</div>
    </time>
  );
}

export default ExpenseItemDate;
