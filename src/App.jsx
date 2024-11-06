import { useState } from "react";
import AddAssigment from "./AddAssigment";
import Assigments from "./Assigments";
import { AssigmentsContext } from "./context";

function App() {
  const [assigments, setAssigments] = useState([]);
  return (
    <div className="flex flex-col items-center bg-purple-200  text-purple-950 min-h-screen ">
      <AssigmentsContext.Provider value={{ setAssigments, assigments }}>
        <div className="w-1/2">
          <p className="font-black text-6xl mt-10  flex flex-col items-center">
            To Do List:
          </p>
          <div className="ml-36">
            <AddAssigment />
            <Assigments />
          </div>
        </div>
      </AssigmentsContext.Provider>
    </div>
  );
}

export default App;
