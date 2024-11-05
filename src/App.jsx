import { useState } from "react";
import AddAssigment from "./AddAssigment";
import Assigments from "./Assigments";
import { AssigmentsContext } from "./context";

function App() {
  const [assigments, setAssigments] = useState([]);
  return (
    <div>
      <AssigmentsContext.Provider value={{ setAssigments, assigments }}>
        <p>To Do List:</p>
        <AddAssigment />
        <Assigments />
      </AssigmentsContext.Provider>
    </div>
  );
}

export default App;
