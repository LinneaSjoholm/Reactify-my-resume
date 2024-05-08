import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


import '../styles/Nav.css'


function Nav() {

  return (
   
    <section className="nav__container">
      <NavLink to="/" className="nav__home" activeClassName="active">
    <FontAwesomeIcon icon={faHome} />
    </NavLink>

      <nav>
        <ul className="nav__list">
          <li>
            <NavLink exact to="/"></NavLink>
          </li>
          <li>
            <NavLink to="/about"
            style={({ isActive }) => ({
              color: isActive ? 'rgba(252,70,107,1)' : '#ffff',
            })}>About me</NavLink>
          </li>
          <li>
            <NavLink to="/projects"
            style={({ isActive }) => ({
              color: isActive ? 'rgba(252,70,107,1)' : '#ffff',
            })}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact"
            style={({ isActive }) => ({
              color: isActive ? 'rgba(252,70,107,1)' : '#ffff',
            })}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav