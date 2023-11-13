import { Link } from "react-router-dom";

import cinemaxLogo from "../assets/cinemax-lg.png";

export default function Nav() {
  return (
    <nav>
      <Link to="/" style={{ height: "44.05px" }}>
        <img src={cinemaxLogo} alt="" width="150" />
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link to="/favorites">Mes favoris</Link>
        </li>
      </ul>
    </nav>
  );
}
