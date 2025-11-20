import { React, Component } from "react";

export default class ExampleClassComponent extends Component {

    render() {
        return (
            <div className="base-container">
                <h1> Employee Management System</h1>

                <table border={1} cellPadding={8} cellSpacing={0} style={{ marginTop: "20px", width: "100%", textAlign: "center" }}>
                    <thead style={{ backgroundColor: "#e0e0e0" }}>
                        <tr>
                            <th>Emp ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Salary</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>101</td>
                            <td>Kumar</td>
                            <td>HR</td>
                            <td>Manager</td>
                            <td>₹60,000</td>
                        </tr>

                        <tr>
                            <td>102</td>
                            <td>Senthil</td>
                            <td>IT</td>
                            <td>Software Engineer</td>
                            <td>₹75,000</td>
                        </tr>

                        <tr>
                            <td>103</td>
                            <td>Raju</td>
                            <td>Finance</td>
                            <td>Accountant</td>
                            <td>₹50,000</td>
                        </tr>

                        <tr>
                            <td>104</td>
                            <td>Mano</td>
                            <td>Marketing</td>
                            <td>Executive</td>
                            <td>₹55,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
import React from "react";

export default function EmployeeManagement() {
    return (
        <div className="base-container">
            <h1>🏢 Employee Management System</h1>

            <table border={1} cellPadding={8} cellSpacing={0} style={{ marginTop: "20px", width: "100%", textAlign: "center" }}>
                <thead style={{ backgroundColor: "#f0f0f0" }}>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Salary</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>101</td>
                        <td>Ravi Kumar</td>
                        <td>HR</td>
                        <td>Manager</td>
                        <td>₹60,000</td>
                    </tr>

                    <tr>
                        <td>102</td>
                        <td>Priya Sharma</td>
                        <td>IT</td>
                        <td>Software Engineer</td>
                        <td>₹75,000</td>
                    </tr>

                    <tr>
                        <td>103</td>
                        <td>Arjun Singh</td>
                        <td>Finance</td>
                        <td>Accountant</td>
                        <td>₹50,000</td>
                    </tr>

                    <tr>
                        <td>104</td>
                        <td>Meena Patel</td>
                        <td>Marketing</td>
                        <td>Executive</td>
                        <td>₹55,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
