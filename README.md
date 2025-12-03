React JSX
==========
      JSX = JavaScript XML
      It allows you to write HTML inside JavaScript.


      JSX makes React code:

            Easier to read
            Easier to write
            More similar to HTML

      Without JSX, React code would look like this (ugly):


Example 1:
========
      function Hello() {
            return <h1>Hello JSX</h1>;
      }



Example 2
=========

      function App() {
            
            const name = "Alice";
            const age = 20;

            return (
            <div>
                  <h1>Welcome {name}</h1>
                  <p>Your age is {age}</p>
                  <button onClick={() => alert("Clicked!")}>Click me</button>
            </div>
            );
      }