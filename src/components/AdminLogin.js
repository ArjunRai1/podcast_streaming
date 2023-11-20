import React from 'react';
import { useNavigate } from 'react-router-dom'; 

import admin from "./admin.jpg";

function AdminLogin() {
  const navigate = useNavigate();
  const handleClick = () => {
    
    var email = document.getElementById("email").value; 
    var password = document.getElementById("password").value;
    if (email === 'admin@gmail.com' && password === 'admin')
      navigate('/admin-landing');

    else if(email === "" || password === "")
      alert("Username or password cannot be empty");

    else
      alert("Email or password is incorrect");
  }
  return (
    <div class="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", backgroundImage: `url(${admin})`, backgroundPosition: "center", backgroundSize: "cover", width: "100%", height: "70%", padding: "0" }}>
      <div class="container">
        <div class="row">
          <div class="col-md-3 offset-md-8">
            <div class="card p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
              <p class="text-center">Welcome Admin</p>
              <form>
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Enter password" />
                </div>
                <div className="text-center">

                  <button className="btn btn-primary" onClick={handleClick}>Login</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
