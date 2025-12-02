import { NavLink } from 'react-router-dom';

import HomeIcon from '../assets/home.png';
import LibraryIcon from '../assets/mylibrary.png';
import BookIcon from '../assets/book.png';
import LoginIcon from '../assets/login.png';
import SettingsIcon from '../assets/settings.png';

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-left">
        <NavLink to="/home" className="nav-item">
          <img src={HomeIcon} alt="Home" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/mylibrary" className="nav-item">
          <img src={LibraryIcon} alt="My Library" />
          <span>My Library</span>
        </NavLink>
      </div>

      <div className="nav-center">
        <div className="nav-total-books">
          <img src={BookIcon} alt="Total Books" />
          <span>Total Books:</span>
          <span className="total-number">0</span>
        </div>
      </div>

      <div className="nav-right">
        <NavLink to="/auth" className="nav-item">
          <img src={LoginIcon} alt="Login" />
          <span>Login</span>
        </NavLink>

        <NavLink to="/settings" className="nav-item">
          <img src={SettingsIcon} alt="Settings" />
          <span>Settings</span>
        </NavLink>
      </div>

    </nav>
  );
}

export default Navbar;