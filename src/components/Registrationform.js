import { useState } from "react";
import axios from 'axios';
import backgroundImage from "./playback.jpg";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://podcast-streaming-backend.onrender.com/userRoute/register', { name, email, password })
      .then(res => {
        if(res.data === "User already exists")
          alert("User already exists");
        else{
          alert("Account created");
          window.location.reload();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', width: '100%' }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  )
}
export default Register;