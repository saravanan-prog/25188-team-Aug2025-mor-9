import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState([
    {
      student_Name: "Jesintha",
      student_Rollno: 2701,
      student_University: "Alagappa University",
      student_Degree: "BSC Computer Science",
    },
    {
      student_Name: "Kathija",
      student_Rollno: 2702,
      student_University: "Alagappa University",
      student_Degree: "BSC Computer Science",
    },
    {
      student_Name: "Kavi Priya",
      student_Rollno: 2703,
      student_University: "Alagappa University",
      student_Degree: "BSC Computer Science",
    },
    {
      student_Name: "Malathi",
      student_Rollno: 2704,
      student_University: "Alagappa University",
      student_Degree: "BSC Computer Science",
    },
  ]);

  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = () => {
    const filtered = search.filter((value) =>
      value.student_Name.toLowerCase().includes(input.toLowerCase())
    );
    setResult(filtered);
  };

  return (
    <div className="base-container">
      <div className="heading text-success text-center" style={{ marginTop: "150px" }}>
        <h1>Student Details</h1>

        <input
          className="mt-4 "
          type="text"
          placeholder="Enter Student Name"
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="btn btn-primary " onClick={handleSearch}>
          Search
        </button>

        <div className="mt-4">
          {result.length > 0 ? (
            result.map((value, index) => (
              <div key={index} >
                <h3>Name: {value.student_Name}</h3>
                <h4>Roll No: {value.student_Rollno}</h4>
                <h4>University: {value.student_University}</h4>
                <h4>Degree: {value.student_Degree}</h4>
              </div>
            ))
          ) : (
            <p className="text-danger mt-3">No Student Found</p>
          )}
        </div>
      </div>
    </div>
  );
}


