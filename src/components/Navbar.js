import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav class = "navbar bg-dark rounded">
            <Link to="/" class="navbar-brand mx-3 text-white">Podcast</Link>
            <div class="nav">
                <Link to="/user-login" class="nav-link text-white">User Login</Link>
                <Link to="/admin-login" class="nav-link text-white">Admin Login</Link>
            </div>
        </nav>
    )
}
export default Nav;