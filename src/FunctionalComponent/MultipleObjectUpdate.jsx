import { useState } from "react";

export default function MultipleObjectUpdate() {
  const [students, setStudents] = useState([
    { id: 1, name: "kavi", age: 23 },
    { id: 2, name: "Jesi", age: 22 },
    { id: 3, name: "Maalu", age: 24 },
  ]);

  const Addstudent = () => {
    setStudents([...students, { id: 4, name: "Ajitha", age: 22 }]);
  };
  const updateStudent = () => {
    setStudents(
      students.map((student) =>
        student.id == 1 ? { ...student, name: "Kavitha", age: 25 } : student
      )
    );
  };
  const deleteStudent = () => {

    setStudents(students.filter((student) => student.id !== 2));
  };

  return (
    <div className="base-container">
      <div className="heading">
        <h1>Student Details</h1>

        {students.map((student) => (
          <div>
            <h1> Student: {student.id}</h1>
            <h3>Name: {student.name} </h3>
            <h3>Age: {student.age}</h3>
          </div>
        ))}
        <button onClick={Addstudent}>Create</button>
        <button onClick={updateStudent}>Update</button>
        <button onClick={deleteStudent}>Delete</button>
      </div>
    </div>
  );
}
