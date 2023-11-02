import { Link } from 'react-router-dom';

function UserLogin() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card p-4">
              <p className="text-center">Welcome User</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
                <div className="text-center">
                  <Link to="/admin-landing">
                    <button className="btn btn-primary">Login</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
