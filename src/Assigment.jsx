import { useContext } from "react";
import { AssigmentsContext } from "./context";
import Button from "./Button";

function Assigment({ assigment, index }) {
  const { setAssigments } = useContext(AssigmentsContext);

  function handleChange() {
    setAssigments((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]); //remove the assigment
  }
  return (
    <div className="flex ">
      <Button textSize={"text-sm"} onClick={handleChange}>
        X
      </Button>
      {assigment}
    </div>
  );
}

export default Assigment;
