import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Assigment({ assigment, index, setAssigments }) {
  const [cheked, setCheked] = useState(false);
  function handleChange() {
    setCheked(!cheked);
    setAssigments((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
  }
  return (
    <div>
      <input type="checkbox" onChange={handleChange} checked={cheked} />
      {assigment}
    </div>
  );
}

export default Assigment;
