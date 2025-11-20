import { Component } from "react";

export default class ConstructorImplement extends Component {

    constructor() {
        super();
        console.log("Constructor called...");
        // Initialize student data
        this.state = {
            students: [
                { id: 1, name: "Ravi", grade: "10th", section: "A" },
                { id: 2, name: "Priya", grade: "9th", section: "B" },
                { id: 3, name: "Arjun", grade: "8th", section: "A" },
                { id: 4, name: "Meena ", grade: "10th", section: "C" },
            ]
        };
    }

    render() {
        return (
            <div className="base-container">
                <div className="heading">
                    <h2>School Management - Student List</h2>
                </div>

                <table border={1} cellPadding={8} cellSpacing={0} style={{ marginTop: "20px", width: "100%", textAlign: "center" }}>
                    <thead style={{ backgroundColor: "#f0f0f0" }}>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Grade</th>
                            <th>Section</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.grade}</td>
                                <td>{student.section}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
