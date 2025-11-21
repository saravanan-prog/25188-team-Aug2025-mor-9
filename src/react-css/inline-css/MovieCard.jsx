export default function MovieCard() {
  const cardStyle = {
    width: "280px",
    padding: "15px",
    borderRadius: "12px",
    backgroundColor: "#1c1c1c",
    color: "white",
    boxShadow: "0 5px 12px rgba(0,0,0,0.4)",
    margin: "40px auto",
    fontFamily: "Arial",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "12px",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const yearStyle = {
    fontSize: "16px",
    color: "orange",
    marginBottom: "8px",
  };

  const descStyle = {
    fontSize: "14px",
    lineHeight: "20px",
    opacity: "0.8",
    marginBottom: "15px",
  };

  const btnStyle = {
    padding: "10px 15px",
    backgroundColor: "orange",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#1c1c1c",
    fontWeight: "bold",
    width: "100%",
  };

  return (
    <div style={cardStyle}>
      <img
        style={imageStyle}
        src="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_UF1000,1000_QL80_.jpg"
        alt="Movie Poster"
      />

      <h2 style={titleStyle}>Inception</h2>
      <p style={yearStyle}>2010 • Sci-Fi / Thriller</p>

      <p style={descStyle}>
        A thief who steals corporate secrets through dream-sharing technology
        is given a chance to erase his criminal record.
      </p>

      <button style={btnStyle}>Watch Trailer</button>
    </div>
  );
}



