import "../../index.css";

function Filter(props) {
  return (
    <select
      name={props.name}
      id={props.id}
      class="text-black rounded-lg p-1 px-8"
    >
      <option value="years">All</option>
      <option value="years">2001</option>
      <option value="years">2000</option>
    </select>
  );
}

export default Filter;
