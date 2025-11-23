import { useState } from "react";
import "../EmployeeSearch/SearchBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SearchBar() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const users = [
    { name: "Laxmi", email: "laxmi@gmail.com", phone: "9876543210", role: "Software Developer" },
    { name: "Akash Kumar", email: "akran@gmail.com", phone: "9876501234", role: "JAVA Developer" },
    { name: "Mahalakshmi", email: "maha@gmail.com", phone: "9876567890", role: "JAVA Developer" },
    { name: "Manohari", email: "manohari@gmail.com", phone: "9988776655", role: "Technical Support Engineer" },
  ];

  const handleSearch = () => {
    const filtered = users.filter(({ name, email, phone, role }) => {
      const lower = text.toLowerCase();
      return (
        name.toLowerCase().includes(lower) ||
        email.toLowerCase().includes(lower) ||
        phone.includes(text) ||
        role.toLowerCase().includes(lower)
      );
    });

    setResults(filtered);
    setShowTable(true);
  };

  const handleClear = () => {
    setResults([]);
    setText("");
    setShowTable(false);
  };

  return (
    <div className="container">
      <h2>Employee Details</h2>

      <input
        type="text"
        placeholder="Search by any field..."
        value={text}
        onChange={({ target: { value } }) => setText(value)}
        className="search-box"
      />

      <button className="btn btn-primary search-btn" onClick={handleSearch}>Search</button>
      <button className="btn btn-primary clear-btn" onClick={handleClear}>Clear</button>

      {showTable && (
        <table className="emp-table ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {results.length > 0 ? (
              results.map(({ name, email, phone, role }, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
