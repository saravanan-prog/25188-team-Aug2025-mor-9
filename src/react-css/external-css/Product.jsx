import "./product.css";
         //External css
export default function Product() {
  const headphones = [
    {
      id: 1,
      name: "Wireless Headphones - Black",
      price: "$49.99",
      image: "https://5.imimg.com/data5/GG/VM/ZY/ANDROID-88652991/1561358024667-jpg-500x500.jpg"
    },
    {
      id: 3,
      name: "Wireless Headphones - Red",
      price: "$54.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb5mXeITbGBC7jAPiM7Kzftv1JHNX4cHSbQ&s"
    },
    {
      id: 4,
      name: "Wireless Headphones - Green",
      price: "$57.99",
      image: "https://cdn.moglix.com/p/guKmMei2bWKDM-large.jpg"
    }
  ];
   
  return (
    <div className="product-list">

      {headphones.map((item) => (
        <div className="product-card" key={item.id}>
          
          <div className="product-image">
            <img src={item.image} alt={item.name} />
          </div>

          <div className="product-info">
            <h2 className="product-name">{item.name}</h2>
            <p className="product-price">{item.price}</p>
            <button className="add-cart-btn">Add to Cart</button>
          </div>

        </div>
      ))}

    </div>
  );
}


