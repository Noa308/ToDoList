import { useContext } from "react";
import Assigment from "./Assigment";
import { AssigmentsContext } from "./context";

function Assigments() {
  const { assigments } = useContext(AssigmentsContext);
  return (
    <div className="flex mt-4 font-normal text-xl text-purple-950 ">
      {assigments.length ? (
        <div>
          <p className="font-bold">My Assigments:</p>
          <div>
            {assigments.map((assigment, i) => (
              <Assigment key={i} index={i} assigment={assigment} />
            ))}
          </div>
          <p className="text-lg pt-2">click to delete complete assigment</p>
        </div>
      ) : (
        <p className="text-lg"> {"You don't have any assigments yet"}</p>
      )}
    </div>
  );
}

export default Assigments;
