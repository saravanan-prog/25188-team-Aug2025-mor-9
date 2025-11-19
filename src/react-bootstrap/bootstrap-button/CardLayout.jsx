export default function CardLayout({ name, role, image }) {
  return (
    <div class="card">
      <img src={image} class="card-img-top" alt="profile" style={{ height: "200px", objectFit: "cover" }}
      />
      <div class="card-body text-center">
        <h4 class="card-title">{name}</h4>
        <p class="card-text">{role}</p>
        <button class="btn btn-primary">Follow</button>
      </div>
    </div>
  );
}
