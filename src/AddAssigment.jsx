import { useContext, useState } from "react";
import { AssigmentsContext } from "./context";

const MAX_LETTERS = 50;
const MAX_ASSIGNMENTS = 10;

function AddAssigment() {
  const { assigments, setAssigments } = useContext(AssigmentsContext);
  const [assigment, setAssigment] = useState("");
  const [message, setMessage] = useState("");

  function handleOnClick() {
    let showText = "";
    if (!assigment) {
      showText += " you can't add an empty assigment.";
    }
    if (assigment.length > MAX_LETTERS) {
      showText += ` you can't write more then ${MAX_LETTERS} letters.`;
    }
    if (assigments.length >= MAX_ASSIGNMENTS) {
      showText += ` you can't write more then ${MAX_ASSIGNMENTS} assigments.`;
    }
    if (showText === "") {
      setAssigments((prev) => [...prev, assigment]);
      setAssigment("");
    }
    setMessage(showText);
  }

  function handleOnChange(e) {
    setAssigment(e.target.value);
    setMessage("");
  }

  return (
    <div>
      <label>
        Add a new assigment
        <input type="text" value={assigment} onChange={handleOnChange}></input>
      </label>
      <button onClick={handleOnClick}>Add</button>
      <div>{message}</div>
    </div>
  );
}

export default AddAssigment;
