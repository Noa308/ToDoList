import { useContext } from "react";
import { AssigmentsContext } from "./context";

function Assigment({ assigment, index }) {
  const { setAssigments } = useContext(AssigmentsContext);

  function handleChange() {
    setAssigments((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]); //remove the assigment
  }
  return (
    <div>
      <button onClick={handleChange}>X</button>
      {assigment}
    </div>
  );
}

export default Assigment;
