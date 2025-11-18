export default function Button() {
  return (
    <div className="base-container">

      <div className="button-heading">
        <h1 class="text-center text-danger">BS - Form Page</h1>
      </div>

      {/* Bootstrap Card Added */}
      <div className="card p-4 shadow-lg" style={{ maxWidth: "450px", margin: "auto" }}>
        <div className="card-body">

          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Submit
            </button>
          </form>

        </div>
      </div>

    </div>
  );
}

