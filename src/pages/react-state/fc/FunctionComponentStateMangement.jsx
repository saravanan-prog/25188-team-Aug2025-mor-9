import { useState } from "react";

export default function FunctionComponentStateMangement() {
  const [authorName, setAuthorName] = useState("Saravanan");
  const [authorAge, setAuthorage] = useState(27);
  const [authorBooks, setAuthorBooks] = useState([
    "Ponniyen selvan",
    "Panjali sabatham",
    "Silapathikaram",
    "Sivaga sinthamani"
  ]);

  return (
    <div className="base-container">
      <div className="heading">
        <h1> Function Component State Management </h1>
      </div>

      <div className="author">
        <p> Author Name : {authorName} </p>
        <p> Author Age : {authorAge} </p>
      </div>

      <div className="books">
        <h5> Author books </h5>

        <ol type="1">
          {authorBooks && authorBooks.length != 0 ? (
            authorBooks.map((value, index) => {
              return <li> {value} </li>;
            })
          ) : (
            <li> Currently No Books found</li>
          )}
        </ol>
      </div>
    </div>
  );
}
