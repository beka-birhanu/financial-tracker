import "../../index.css";

function Filter(props) {
  function filterChangeHandler(event) {
    props.onSelect(+event.target.value);
  }

  const years = props.years;

  return (
    <select
      name={props.name}
      id={props.id}
      className="text-black rounded-lg p-1 px-8"
      onChange={filterChangeHandler}
    >
      <option value={0}>All</option>
      {years.map((year) => (
        <option value={year} key={year}>
          {year}
        </option>
      ))}
    </select>
  );
}

export default Filter;
