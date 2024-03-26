import "../../index.css";

function FormButton(props) {
  return (
    <div>
      <label for={props.lable}>{props.label}</label>
      <input id={props.label} name={props.label} type={props.type} />
    </div>
  );
}

export default FormButton;
