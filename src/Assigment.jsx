function Assigment({ assigment, index, setAssigments }) {
  function handleChange() {
    setAssigments((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]); //remove the assigment
  }
  return (
    <div>
      <button onClick={handleChange}>X</button>
      {/* <input type="checkbox" onChange={handleChange} checked={false} /> */}
      {assigment}
    </div>
  );
}

export default Assigment;
