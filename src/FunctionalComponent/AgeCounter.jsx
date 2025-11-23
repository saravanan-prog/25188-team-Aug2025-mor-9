import { useState } from "react";

export default function AgeCounter() {
  const [age, setAge] = useState();
  return (
    <div className="base-container">
      <div className="heading">
        <h1>Age Counter</h1>
        <input
          type="text"
          placeholder="Enter your age"
          onChange={(event) => {
            const userAge = Number(event.target.value);
            setAge(userAge >= 18 ? "Adult" : "Minor");
          }}
        />
        <h3>You are :{age}</h3>
      </div>
    </div>
  );
}
