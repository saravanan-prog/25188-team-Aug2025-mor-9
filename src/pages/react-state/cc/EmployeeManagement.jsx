import { React, Component, Fragment } from "react";

export default class EmployeeManagemenet extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          empid: 2525,
          empName: "Raja",
          empSalary: 25000,
          employeedes: "Quality Engineer",
          employeeLocation: "Chennai",
        },
        {
          empid: 2526,
          empName: "Sekar",
          empSalary: 45000,
          employeedes: "Production Engineer",
          employeeLocation: "Bangalore",
        },
      ],
    };
  }

  render() {
    return (
      <div className="base-container">
        <div className="heading">
          <h1> TCS Employee mangement System </h1>
        </div>
        <div className="employee-details">
          <table border={1}>
            <thead>
              <tr>
                <th> Serial Number </th>
                <th> Employee ID </th>
                <th> Employee Name </th>
                <th> Employee Salary </th>
                <th> Employee Desigination</th>
                <th> Employee Location </th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees && this.state.employees.length != 0 ? (
                this.state.employees.map((value, index) => {
                  const {
                    empName,
                    empSalary,
                    empid,
                    employeeLocation,
                    employeedes,
                  } = value;

                  return (
                    <Fragment>
                      <tr>
                        <td>{index + 1} </td>
                        <td>{empid} </td>
                        <td>{empName} </td>
                        <td>{empSalary} </td>
                        <td>{employeedes} </td>
                        <td>{employeeLocation} </td>
                      </tr>
                    </Fragment>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6}> Currently No Employee Found </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
