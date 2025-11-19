import "../external-css/LoginForm.css";

export default function LoginForm() {
  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back!!Login</h2>
      <form className="login-form">
        <label>USERNAME</label>
        <input type="text" placeholder="Username" className="login-input" />
        <label>PASSWORD</label>
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-btn">Submit</button>
      </form>
    </div>
  );
}
