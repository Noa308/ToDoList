import { useState } from "react";
import AddAssigment from "./AddAssigment";
import ListAssigments from "./ListAssigments";

function App() {
  const [assigments, setAssigments] = useState([]);
  return (
    <div>
      <p>To Do List:</p>
      <AddAssigment setAssigments={setAssigments} />
      My Assigments:
      <ListAssigments assigments={assigments} setAssigments={setAssigments} />
      check the checked box to delete complete assigment
    </div>
  );
}

export default App;
