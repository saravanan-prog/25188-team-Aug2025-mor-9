                              React Context API (useContext) — Explained Simply 
                              =================================================
Before:

      Props Drilling
      ==============

            Passing props through multiple components just to reach a deeply nested component.

            Example 1:

                  App  
                  └─ A (needs to pass the data)
                        └─ B (doesn't need the data)
                              └─ C (doesn't need the data)
                                    └─ D (actually needs the data)


                  A → B → C → D

                  B and C don’t use the data
                  But they must forward it down
                  This is prop drilling ✔️


            Example 2



                  App
                  │
                  ├── Parent
                  │     └── Child
                  │           └── GrandChild
                  │                 └── TargetComponent  <-- needs "user"
                  │
                  └── ...


                  App
                  └─ Parent (receives user)
                        └─ Child (passes user)
                              └─ GrandChild (passes user)
                                    └─ TargetComponent (finally uses user)


Context API
===========

      The Context API lets you share data across your component tree without needing to pass props down manually at every level (“prop drilling”).

            How Context Works
            -----------------

             1. Create the Context

             2. Provide the value at a high level using a Provider

             3. Consume the value from any child component


            1. Create a Context
            --------------------

                  import { createContext } from "react";
                  export const ThemeContext = createContext();

            
            2. Wrap your App with a Provider
            --------------------------------


                  import { useState } from "react";
                  import { ThemeContext } from "./ThemeContext";

                  export default function App() {

                        const [theme, setTheme] = useState("light");

                        return (

                              <ThemeContext.Provider value={{ theme, setTheme }}>
                                    <Home />
                              </ThemeContext.Provider>
                        );

                  }
            


            3. Consume Context in a Child Component
            ---------------------------------------


                  import { useContext } from "react";
                  import { ThemeContext } from "./ThemeContext";

                  export defaultfunction Home() {
                        const { theme, setTheme } = useContext(ThemeContext);

                        return (
                              <div style={{
                                    background: theme === "light" ? "#fff" : "#333",
                                    color: theme === "light" ? "#000" : "#fff",
                              }}>
                                    <h1>Current Theme: {theme}</h1>
                                    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                                    Toggle Theme
                                    </button>
                              </div>
                        );
                  }

                


               








