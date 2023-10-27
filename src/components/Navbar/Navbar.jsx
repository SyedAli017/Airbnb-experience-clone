import "./navbar.css";
import Logo from "../../images/airbnb-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={Logo} alt="airbnb logo" />
    </nav>
  );
};

export default Navbar;
