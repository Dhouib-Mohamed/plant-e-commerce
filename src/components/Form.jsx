import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/form.css";
import { useState } from "react";

function handleSubmit(e) {
  e.preventDefault();
  alert(e.target["my_input"].value);
  e.target["my_input"].value = "";
}
function Form() {
  const [inputValue, setInputValue] = useState("");
  function checkValue(value) {
    if (!value.includes('f')) {
        setInputValue(value)
    }
}
  return (
    <form onSubmit={handleSubmit} className="component form-group "id="form">
      <div className="input_text">
        <input
          value={inputValue}
          type="text"
          name="my_input"
          placeholder="What do you want to say? "
          className="form-control"
          onChange={(e) => checkValue(e.target.value)}
        />
      </div>
        <button
          className="btn btn-danger button"
          onClick={(e) => {e.preventDefault();alert("An alert have been declared")}}
        >
          ALERT 💀💀
        </button>
      <button type="submit" className="btn btn-dark button">
        Enter
      </button>
    </form>
  );
}
export default Form;
