import "../../index.css";

function FormButton(props) {
  return (
    <div class={`flex flex-col sm:w-2/4 gap-2 ${props.additionalClass}`}>
      <label for={props.lable} class="text-xl font-semibold pl-1">
        {props.label}
      </label>

      <input
        id={props.label}
        name={props.label}
        type={props.type}
        class="rounded-lg shadow p-2 text-lg hover:shadow-lg transition duration-300 ease-in-out"
      />
    </div>
  );
}

export default FormButton;
