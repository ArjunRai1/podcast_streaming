import {Link} from "react-router-dom";
import "./headerstyle.css";
function Nav()
{
    return(
        <nav class = "navbar transparent-navbar">
            <Link to="/" class="navbar-brand text-white" id="brand"><img src="/mic.png" alt="logo" style={{ width: "40px"}}/>EchoPulse</Link>
            <div class="nav">
                
            <Link to="/register" class="nav-link text-white">Register</Link>
                <Link to="/user-login" class="nav-link text-white">User Login</Link>
                <Link to="/admin-login" class="nav-link text-white">Admin Login</Link>
                <Link to="/support" class="nav-link text-white">Support</Link>
                <Link to="/upload" class = "nav-link text-white">Upload</Link>
                <Link to="/audio" class = "nav-link text-white">AudioList</Link>

            </div>
        </nav>
    )
}
export default Nav;