const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg"
        alt=""
        className="logo"
      />
      <ul className="navbar-menu">
        <a href="">
          <li className="nav-item">Home</li>
        </a>
        <a href="">
          <li className="nav-item">Productos</li>
        </a>
        <a href="">
          <li className="nav-item">Precios</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
