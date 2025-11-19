import { useState } from "react";

export default function QuoteGenerator() {
  const quotes = [
    "Believe you can and you're halfway there.",
    "Every moment is a fresh beginning.",
    "Dream big and dare to fail.",
    "The only limit is your mind.",
    "Happiness depends upon ourselves.",
    "Turn your wounds into wisdom.",
  ];
  const bgColors = ["orange", "blue", "green", "purple", "red", "brown"];

  const [quote, setQuote] = useState(quotes[0]);

  const [bgColor, setBgColor] = useState("orange");

  const handleNewQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];

    setQuote(randomQuote);
    setBgColor(randomColor);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: "white",
        textAlign: "center",
        width: "100%",
        height: "100vh",
        margin: "0",
        fontFamily: "Arial",
      }}
    >
      <h2 style={
        {
            paddingTop:"150px",
        }
      }>Random Quote Generator</h2>

      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {quote}
      </p>

      <button
        onClick={handleNewQuote}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Next Quote
      </button>
    </div>
  );
}
