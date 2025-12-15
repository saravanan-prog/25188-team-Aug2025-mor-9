import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsAPI();
  }, []);

  const getProductsAPI = async () => {
    let endpointURL = process.env.REACT_APP_PRODUCTS_API;
    let response = await fetch(endpointURL);
    let data = await response.json();
    setProducts(data);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">Products</h2>

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
                <h5 style={{ fontWeight: "600", color: "#333" }}>
                  {prod.title}
                </h5>

                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0066cc",
                  }}
                >
                  ${prod.price}
                </p>
                <p style={{ color: "grey", fontStyle: "italic" }}>
                  {prod.category}
                </p>
                <button className="btn btn-primary">
                  <Link
                    to={`/products/details/${prod.id}`}
                    style={{
                      display: "inline-block",
                      marginTop: "10px",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
