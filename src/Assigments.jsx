import { useContext } from "react";
import Assigment from "./Assigment";
import { AssigmentsContext } from "./context";

function Assigments() {
  const { assigments } = useContext(AssigmentsContext);
  return (
    <div>
      {assigments.length ? (
        <div>
          <p>My Assigments:</p>
          <div>
            {assigments.map((assigment, i) => (
              <Assigment key={i} index={i} assigment={assigment} />
            ))}
          </div>
          <p>click to delete complete assigment</p>
        </div>
      ) : (
        <p> {"You don't have any assigments yet"}</p>
      )}
    </div>
  );
}

export default Assigments;
