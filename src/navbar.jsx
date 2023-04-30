function Navbar() {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          My Brand
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#">
            Home
          </a>

          <a className="navbar-item" href="#">
            About
          </a>

          <a className="navbar-item" href="#">
            Contact
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light" href="#">
                Log in
              </a>
              <a className="button is-primary" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
