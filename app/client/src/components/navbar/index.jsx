import "./style.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Express Checkpoint</div>
      <div className="nav-list">
        <ul className="nav-items">
            <Link className="nav-link" to="/">
          <li className="nav-item">Home</li>
          </Link>
          <Link className="nav-link" to="/services">
          <li className="nav-item">Services</li>
          </Link>
          <Link className="nav-link" to="/contact">
          <li className="nav-item">Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
