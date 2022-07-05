import './navbar.scss'
import { NavLink } from "react-router-dom";
function NavBar() {
    return (
        <nav className='navbar'>
            <ul className="d-flex">
                <li><NavLink exact='true' to="/">HOME</NavLink></li>
                <li><NavLink to="/shop">SHOP</NavLink></li>
                <li><NavLink to="/about-us">ABOUT US</NavLink></li>
                <li><NavLink to="/blog">BLOG</NavLink></li>
                <li><NavLink to="/gallery">GALLERY</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar