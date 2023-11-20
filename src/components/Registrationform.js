import { useState } from "react";
import Axios from 'axios';
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:4000/userRoute/register', { name, email, password })
      .then(res => {
        if(res.data === "User already exists")
          alert("User already exists");
        else
          alert("Account created");
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="text-center">

          <button type="submit" class="btn btn-primary">Register</button>

        </div>
      </form>
    </div>
  )
}
export default Register;