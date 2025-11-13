import { React, Component, Fragment } from "react";

export default class ClasscomponentStateManagement extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
          rollNo: 101,
          name: "Karthik",
          grade: "10th",
          marks: 480,
          section: "A",
          city: "Chennai",
        },
        {
          rollNo: 102,
          name: "Priya",
          grade: "9th",
          marks: 455,
          section: "B",
          city: "Bangalore",
        },
        {
          rollNo: 103,
          name: "Ravi",
          grade: "10th",
          marks: 490,
          section: "C",
          city: "Hyderabad",
        },
      ],
    };
  }

  render() {
    return (
      <div className="base-container">
        <div className="heading">
          <h1>    School Student Management System </h1>
        </div>

        <div className="student-details">
          <table border={1} cellPadding={8} cellSpacing={0}>
            <thead style={{ backgroundColor: "#f0f0f0" }}>
              <tr>
                <th> Serial No </th>
                <th> Roll No </th>
                <th> Student Name </th>
                <th> Grade </th>
                <th> Marks </th>
                <th> Section </th>
                <th> City </th>
              </tr>
            </thead>

            <tbody>
              {this.state.students && this.state.students.length !== 0 ? (
                this.state.students.map((value, index) => {
                  const { rollNo, name, grade, marks, section, city } = value;

                  return (
                    <Fragment key={index}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{rollNo}</td>
                        <td>{name}</td>
                        <td>{grade}</td>
                        <td>{marks}</td>
                        <td>{section}</td>
                        <td>{city}</td>
                      </tr>
                    </Fragment>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7}> Currently No Student Data Found </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
