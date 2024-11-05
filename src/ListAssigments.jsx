import { useContext } from "react";
import Assigment from "./Assigment";
import { AssigmentsContext } from "./context";

function ListAssigments() {
  const { assigments } = useContext(AssigmentsContext);
  return (
    <div>
      {assigments.map((assigment, i) => (
        <Assigment key={i} index={i} assigment={assigment} />
      ))}
    </div>
  );
}

export default ListAssigments;
