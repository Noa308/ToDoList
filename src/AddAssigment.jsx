import { useContext, useState } from "react";
import { AssigmentsContext } from "./context";
import Button from "./Button";

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
    <div className="flex mt-4 flex-col">
      <div className="flex">
        <label className="flex font-normal text-xl text-purple-950 ">
          Add a new assigment:
          <input
            type="text"
            value={assigment}
            onChange={handleOnChange}
            className="bg-purple-50 rounded-md h-8"
          />
        </label>
        <Button onClick={handleOnClick}>Add</Button>
      </div>
      <div className="font-bold mt-4 text-red-600">{message}</div>
    </div>
  );
}

export default AddAssigment;
