import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import DefaultLanding from "./components/DefaultLanding";
import UserLanding from "./components/UserLanding";
import AdminLanding from './components/AdminLanding';
function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<DefaultLanding />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/user-landing" element={<UserLanding />} />
          <Route path="/admin-landing" element={<AdminLanding />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
