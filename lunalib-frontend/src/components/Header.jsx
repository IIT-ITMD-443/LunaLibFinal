import Logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} className="header-logo" alt="LunaLib logo" />
      </div>
    </header>
  );
}

export default Header;
