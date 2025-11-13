import { useState } from "react";

export default function FunctionComponent() {
  const [directorName, setDirectorName] = useState("Mani Ratnam");
  const [directorAge, setDirectorAge] = useState(68);
  const [movies, setMovies] = useState([
    "Ponniyin Selvan",
    "Roja",
    "Alaipayuthey",
    "Guru",
    "Dil Se"
  ]);

  return (
    <div className="base-container">
      <div className="heading">
        <h1>  Movie Management System </h1>
      </div>

      <div className="director">
        <p> Director Name : {directorName} </p>
        <p> Director Age : {directorAge} </p>
      </div>

      <div className="movies">
        <h5> Directed Movies </h5>

        <ol type="1">
          {movies && movies.length !== 0 ? (
            movies.map((value, index) => {
              return <li key={index}> {value} </li>;
            })
          ) : (
            <li> Currently No Movies Found </li>
          )}
        </ol>
      </div>
    </div>
  );
}
