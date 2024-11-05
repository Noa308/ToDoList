import Assigment from "./Assigment";

function ListAssigments({ assigments, setAssigments }) {
  return (
    <div>
      {assigments.map((assigment, i) => (
        <Assigment
          assigment={assigment}
          key={i}
          index={i}
          setAssigments={setAssigments}
        />
      ))}
    </div>
  );
}

export default ListAssigments;
