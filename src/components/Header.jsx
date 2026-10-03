import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/produtos"}>Produtos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
