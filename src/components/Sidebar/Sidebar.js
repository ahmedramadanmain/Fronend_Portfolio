import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import logoS from "../../assets/images/logo-s.png";
import logoSubtitle from "../../assets/images/logo_sub.png";
import {
  faHome,
  faGear,
  faUser,
  faLightbulb,
  faEye,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logoS} alt="logo" />
        <img className="sub-title-img" src={logoSubtitle} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          <span>Home</span>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} />
          <span>About</span>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active "
          className="skills-link"
          to="/skills"
        >
          <FontAwesomeIcon icon={faGear} />
          <span>Skills</span>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active "
          className="tips-link"
          to="/tips"
        >
          <FontAwesomeIcon icon={faLightbulb} />
          <span>Tips</span>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active "
          className="work-link"
          to="/work"
        >
          <FontAwesomeIcon icon={faEye} />
          <span>Work</span>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active "
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Contact</span>
        </NavLink>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ahmedRamadan16"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/ahmed.rampo.31508/"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
