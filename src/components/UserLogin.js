import React, { useState } from 'react';
import user from "./user.jpg";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:4000/userRoute/user-login', { email, password })
      .then((res) => {
        if (res.status === 200 && res.data.message === "Authentication success") {
          // Successful login, navigate to the user-landing page
          navigate('/user-landing');
        } else {
          // Authentication failed, display an alert
          alert('Authentication failed');
        }
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }

return (
  <div class="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", backgroundImage: `url(${user})`, backgroundPosition: "center", backgroundSize: "cover", width: "100%", height: "100%", padding: "0" }}>
    <div class="container">
      <div class="row">
        <div class="col-md-3 offset-md-8">
          <div class="card p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <p class="text-center">Welcome User</p>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password" />
              </div>
              <div class="text-center">
                <button class="btn btn-primary">Login</button>

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
