import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import './Nav.css'



export default function Nav({ onSearch, random, cerrarSesion }) {
    const handleLogout = () => {
      cerrarSesion();
      navigate("/");
    };
    return (
      <div className='navBar'>
        <Link to="/home">
          <button className="btn" type="button">
            <strong>Home</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </Link>
        <Link to="/favorites">
          <button class="btn" type="button">
            <strong>Favotites</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </Link>
        <Link to="/about">
          <button class="btn" type="button">
            <strong>About</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </Link>

        <SearchBar onSearch={onSearch} random={random} />
        {cerrarSesion && (
          <button class="btn" type="button" onClick={handleLogout}>
            <strong>Cerrar Sesion</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        )}
      </div>
    );
}