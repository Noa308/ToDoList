import { useState } from "react";
import AddAssigment from "./AddAssigment";
import ListAssigments from "./ListAssigments";
import { AssigmentsContext } from "./context";

function App() {
  const [assigments, setAssigments] = useState([]);
  return (
    <div>
      <AssigmentsContext.Provider value={{ setAssigments, assigments }}>
        <p>To Do List:</p>
        <AddAssigment />
        <div>
          {assigments.length ? (
            <div>
              <p>My Assigments:</p>
              <ListAssigments />
              click to delete complete assigment
            </div>
          ) : (
            "Add assigments"
          )}
        </div>
      </AssigmentsContext.Provider>
    </div>
  );
}

export default App;
