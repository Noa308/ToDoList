import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddAssigment({ setAssigments }) {
  const [assigment, setAssigment] = useState("");
  return (
    <div>
      <label>
        Add a new assigment
        <input
          type="text"
          value={assigment}
          onChange={(e) => setAssigment(e.target.value)}
        ></input>
      </label>
      <button
        onClick={() =>
          setAssigments((prev) => [...prev, assigment], setAssigment(""))
        }
      >
        Add
      </button>
    </div>
  );
}

export default AddAssigment;
