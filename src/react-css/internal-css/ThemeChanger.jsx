import { useState } from "react";
import React from "react";

export default function ThemeChanger() 
{
  const [isDark, setIsDark] = useState(false);
  const themeStyle = {
    width: "100%",
    height: "100vh",
    padding: "30px",
    textAlign: "center",
    fontFamily: "Arial",
    backgroundColor: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    color: "white",
    backgroundColor: "blue",
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <React.Fragment>
      <div style={themeStyle}>
        <h2>{isDark ? "Dark Mode " : "Light Mode "}</h2>

        <p>
          {isDark
            ? "You are currently in Dark Mode."
            : "You are currently in Light Mode."}
        </p>

        <button style={buttonStyle} onClick={toggleTheme}>
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </React.Fragment>
  );
}
