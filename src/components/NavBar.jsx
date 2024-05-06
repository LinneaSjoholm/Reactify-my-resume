import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'
import SocialLinks from "./SocialLinks";

function NavBar() {
  return (
    <section className="header-container">
      <h1 className="logo">Linnea Sjöholm</h1>
      <h2 className="tagline">Studying to become a Frontend-developer</h2>
      <nav className="link-options">
        <ul className="link-list">
          <li>
            <NavLink exact to="/"></NavLink>
          </li>
          <li>
            <NavLink to="/about"
            style={({ isActive }) => ({
              color: isActive ? '#ffc0cb' : '#4A5759',
            })}>About me</NavLink>
          </li>
          <li>
            <NavLink to="/projects"
            style={({ isActive }) => ({
              color: isActive ? '#ffc0cb' : '#4A5759',
            })}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact"
            style={({ isActive }) => ({
              color: isActive ? '#ffc0cb' : '#4A5759',
            })}>Contact</NavLink>
          </li>
        </ul>
      </nav>
      <SocialLinks />
    </section>
  );
}

export default NavBar;