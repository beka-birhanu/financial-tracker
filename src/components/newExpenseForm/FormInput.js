import "../../index.css";

function FormInput(props) {
  function valueChangeHandler(event) {
    props.onChange(event.target.value);
  }

  return (
    <div className={`flex flex-col sm:w-2/4 gap-2 ${props.additionalClass}`}>
      <label htmlFor={props.lable} className="text-xl font-semibold pl-1">
        {props.label}
      </label>

      <input
        id={props.label}
        name={props.label}
        type={props.type}
        required={true}
        value={props.value}
        min={props.type === "number" ? "0.01" : undefined}
        step={props.type === "number" ? "0.01" : undefined}
        className="rounded-lg shadow p-2 text-lg hover:shadow-lg transition duration-300 ease-in-out"
        onChange={valueChangeHandler}
      />
    </div>
  );
}

export default FormInput;
