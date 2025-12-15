import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CategoryProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategoryAPI();
  }, [category]);

  const getCategoryAPI = async () => {
    let endpointURL = `${process.env.REACT_APP_CATEGORY_API}/${category}`;
    let response = await fetch(endpointURL);
    let data = await response.json();
    setProducts(data);
  };

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

      <h2
        className="text-center mb-4"
        style={{ color: "#1a73e8", fontWeight: "600" }}
      >
        Category: {category.toUpperCase()}
      </h2>

      <div className="row">
        {products.map((prod) => (
          <div className="col-md-4 mb-4" key={prod.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={prod.image}
                className="card-img-top p-3"
                style={{ height: "250px", objectFit: "contain" }}
                alt={prod.title}
              />

              <div className="card-body">
                <h5
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#333",
                    minHeight: "48px",
                  }}
                >
                  {prod.title}
                </h5>

                <p
                  style={{ fontSize: "17px", color: "green", margin: "10px 0" }}
                >
                  ${prod.price}
                </p>

                <Link
                  to={`/products/details/${prod.id}`}
                  style={{
                    padding: "8px 14px",
                    backgroundColor: "#1a73e8",
                    color: "white",
                    borderRadius: "6px",
                    textDecoration: "none",
                    display: "inline-block",
                    fontWeight: "500",
                  }}
                >
                  View Details 
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
