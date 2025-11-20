import { useState } from "react";

export default function SearchBar() {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const employees = [
        { name: "Raja", email: "raja@gmail.com", phone: "9876543210", role: "Developer" },
        { name: "Kumar", email: "kumar@gmail.com", phone: "9123456780", role: "Quality Engineer" },
        { name: "Priya", email: "priya@gmail.com", phone: "9988776655", role: "Quality Engineer" },
        { name: "John", email: "john@gmail.com", phone: "9000011122", role: "Manager" }
    ];

    const handleSearch = () => 
    {
        const text = searchText.toLowerCase();

        const result = employees.filter((emp) =>
            emp.name.toLowerCase().includes(text) ||
            emp.email.toLowerCase().includes(text) ||
            emp.phone.includes(text) ||
            emp.role.toLowerCase().includes(text)
        );

        setFilteredData(result);
    };

    return (
        <div style={{ padding: "20px",}}>
            <h2>Employee Search</h2>

            <input
                type="text"
                placeholder="Search here..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ padding: "8px", width: "250px" }}
            />

            <button onClick={handleSearch} style={{ marginLeft: "10px", padding: "8px 12px" }}>
                Search
            </button>

            <div style={{ marginTop: "20px" }}>
                <h3>Search Results</h3>

                {filteredData.length === 0 ? (
                    <p>No results found</p>
                ) : (
                    filteredData.map((emp, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid gray",
                                padding: "10px",
                                marginBottom: "10px",
                                borderRadius: "6px"
                            }}
                        >
                            <p><strong>Name:</strong> {emp.name}</p>
                            <p><strong>Email:</strong> {emp.email}</p>
                            <p><strong>Phone:</strong> {emp.phone}</p>
                            <p><strong>Role:</strong> {emp.role}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}