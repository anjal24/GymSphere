import { Link, Outlet, useNavigate, useLocation } from "react-router";
import "./header.css";
import logoImg from "./assets/Logo.jpeg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleServicesClick = (e) => {
    // Agar hum pehle se Home page par hain
    if (location.pathname === "/") {
      e.preventDefault(); // Page change hone se roko
      const element = document.getElementById("services-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll karke wahan le jao
      }
    }
    // Agar hum kisi aur page (About/Contact) par hain, toh default Link behaviour (/services page) kaam karega
  };

  return (
    <div>
      <div className="header">
        <div>
          <Link className="link" to="/">
            <img alt="Logo" src={logoImg} style={{ height: "50px" }} />
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>

          {/* Services Button with Scroll Logic */}
          <li>
            <Link className="link" to="/services" onClick={handleServicesClick}>
              Services
            </Link>
          </li>

          <li>
            <Link className="link" to="/team">
              Team
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/booknow">
              BookNow
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}

export default Navbar;
