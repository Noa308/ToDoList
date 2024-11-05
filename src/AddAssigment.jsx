import { useContext, useState } from "react";
import { AssigmentsContext } from "./context";
function AddAssigment() {
  const { assigments, setAssigments } = useContext(AssigmentsContext);
  const [assigment, setAssigment] = useState("");
  const [emptyMessage, setemptyMessage] = useState("");
  const [lettersMessage, setLettersMessage] = useState("");
  const [MaxAssigmentsMessage, setMaxAssigmentsMessage] = useState("");
  function handleOnClick() {
    const MaxLetters = 50;
    const MaxAssigments = 10;
    if (!assigment) {
      setemptyMessage("you can't add an empty assigment");
    } else if (assigment.length > MaxLetters) {
      setLettersMessage(`you can't write more then ${MaxLetters} letters`);
    } else if (assigments.length >= MaxAssigments) {
      setMaxAssigmentsMessage(
        `you can't write more then ${MaxAssigments} assigments`
      );
    } else {
      setAssigments((prev) => [...prev, assigment]);
      setAssigment("");
    }
  }

  function handleOnChange(e) {
    setAssigment(e.target.value);
    setemptyMessage("");
    setLettersMessage("");
    setMaxAssigmentsMessage("");
  }
  return (
    <div>
      <label>
        Add a new assigment
        <input type="text" value={assigment} onChange={handleOnChange}></input>
      </label>
      <button onClick={handleOnClick}>Add</button>
      <div>{emptyMessage}</div>
      <div>{lettersMessage}</div>
      <div>{MaxAssigmentsMessage}</div>
    </div>
  );
}

export default AddAssigment;
