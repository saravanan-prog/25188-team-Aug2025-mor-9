React Custom Hook
=================

    A Custom Hook is just a function that:

        ✔ starts with the word use
        ✔ contains React hooks inside it
        ✔ helps you reuse code in many components


Why do we use Custom Hooks?
--------------------------
    Imagine you write the same code in 3 components.

    Example:

        Fetching data
        Handling a counter
        Form handling

            Instead of repeating the same code,
            you write it once inside a custom hook
            and use it everywhere.

        This makes your code clean, short, and easy.

    

Example
========

Create the hook
------------------

import { useState, useEffect } from "react";

export default function useFetch(url) {
    
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(result => setData(result));
  }, [url]);

  return data;
}


Use it inside a component
--------------------------

function Users() {

  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  if (!users) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}