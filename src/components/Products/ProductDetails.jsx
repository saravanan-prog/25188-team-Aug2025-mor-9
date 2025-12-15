import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getProductDetailAPI();
  }, [id]);

  const getProductDetailAPI = async () => {
    let endpointURL = `${process.env.REACT_APP_PRODUCTS_API}/${id}`;
    let response = await fetch(endpointURL);
    let data = await response.json();
    setDetails(data);
  };

  if (!details) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <Link
        to="/products"
        style={{
          display: "inline-block",
          padding: "6px 12px",
          backgroundColor: "#e0e0e0",
          color: "#222",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "500",
        }}
      >
        ← Back
      </Link>

      <div className="card shadow p-4 mt-3">
        <div className="row">
          <div className="col-md-5 d-flex align-items-center">
            <img
              src={details.image}
              alt={details.title}
              className="img-fluid"
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-7">
            <h2 style={{ fontWeight: "600", color: "#333" }}>
              {details.title}
            </h2>

            <h4 style={{ color: "green", marginTop: "15px" }}>
              ${details.price}
            </h4>

            <p style={{ color: "grey", fontStyle: "italic", marginTop: "8px" }}>
              {details.category}
            </p>

            <p className="mt-3" style={{ lineHeight: "1.6", color: "#555" }}>
              {details.description}
            </p>

            <button className="btn btn-primary"
              style={{
                display: "inline-block",
                      marginTop: "10px",
                      color: "#fff",
                      textDecoration: "none",
              }}
            >
              Buy Now 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
