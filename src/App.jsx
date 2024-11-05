import { useState } from "react";
import AddAssigment from "./AddAssigment";
import ListAssigments from "./ListAssigments";

function App() {
  const [assigments, setAssigments] = useState([]);
  return (
    <div>
      <p>To Do List:</p>
      <AddAssigment setAssigments={setAssigments} assigments={assigments} />
      <div>
        {assigments.length ? (
          <div>
            <p>My Assigments:</p>
            <ListAssigments
              assigments={assigments}
              setAssigments={setAssigments}
            />
            click to delete complete assigment
          </div>
        ) : (
          "Add assigments"
        )}
      </div>
    </div>
  );
}

export default App;
