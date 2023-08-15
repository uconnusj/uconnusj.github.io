export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="../">
            <img src="./usj_logo.jpeg" alt="Logo" />
          </a>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">Archives</a>
            <a className="navbar-item">Help</a>
            <a className="navbar-item">Login</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Account</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Dashboard</a>
                <a className="navbar-item">Profile</a>
                <a className="navbar-item">Settings</a>
                <hr className="navbar-divider" />
                <div className="navbar-item">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
