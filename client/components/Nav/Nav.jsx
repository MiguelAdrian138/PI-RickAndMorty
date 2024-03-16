import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav({ onSearch, random, cerrarSesion }) {
  const handleLogout = () => {
    cerrarSesion();
    navigate("/");
  };
  return (
    <div className="navBar">
      <Link to="/home">
        <button className="btn" type="button">
          <strong>Home</strong>
        </button>
      </Link>
      <Link to="/favorites">
        <button className="btn" type="button">
          <strong>Favorites</strong>
        </button>
      </Link>
      <Link to="/about">
        <button className="btn" type="button">
          <strong>About</strong>
        </button>
      </Link>

      <SearchBar onSearch={onSearch} random={random} />
      <div>
        {cerrarSesion && (
          <button className="btn" type="button" onClick={handleLogout}>
            <strong>Cerrar Sesion</strong>
          </button>
        )}
      </div>
    </div>
  );
}
