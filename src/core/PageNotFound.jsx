export default function PageNotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-danger">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/products">⬅️Go Home</a>
    </div>
  );
}
