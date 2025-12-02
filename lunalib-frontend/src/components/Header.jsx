import Logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={Logo} className="header-logo" alt="LunaLib logo" />
    </header>
  );
}

export default Header;