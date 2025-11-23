import { useState } from "react";

export default function InputChange() {
  const [firstName, setFirstname] = useState();
  const [lastName, setLastname] = useState();
  return (
    <div className="base-container">
      <div className="heading">
        <h1>Input Change Event</h1>
        <input
          type="text"
          placeholder="First name"
          onChange={(event) => setFirstname(event.target.value.toUpperCase())}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(event) => setLastname(event.target.value.toUpperCase())}
        />
        <h4>
          My Name is {firstName} {lastName}
        </h4>
      </div>
    </div>
  );
}
