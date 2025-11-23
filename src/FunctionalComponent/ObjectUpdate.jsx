import { useState } from "react";

export default function ObjectUpdate() {
  const [update, setUpdate] = useState({
    name: "Jesintha",
    age: 22,
    Degree: "BSC Computer Science",
    University: "Alagappa University",
  });
  const updatenew = () => {
    setUpdate({ ...update, name: "kavi", age: 21 });
  };

  const create = () => {
    setUpdate({ name: "Maalu", age: 24 });
  };
  const deleteage = () => {
    const { age, ...updatenew } = update;
    setUpdate(updatenew);
  };

  return (
    <div className="base-container">
      <div className="heading">
        <h1>Name:{update.name}</h1>

        <h1>Age:{update.age}</h1>
        <h1>Degree:{update.Degree}</h1>
        <h1>University:{update.University}</h1>

        <button onClick={updatenew}>update</button>
        <button onClick={create}>Create</button>
        <button onClick={deleteage}>Delete</button>
      </div>
    </div>
  );
}
