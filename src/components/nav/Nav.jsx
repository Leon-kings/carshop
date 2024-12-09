import { useState } from "react";
import "../../assets/css/nav.css";
import { Link } from "react-router-dom";
import ld from "../../assets/360_F_288921356_krHC3KV1lJ2jAGnaep6NXZX6Fkv4FF9q.jpg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={ld} alt="" width={80} />
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to={'/'}>HOME</Link>
          </li>
          <li>
          <Link to={'/'}>SERVICES</Link>
          </li>
          <li>
          <Link to={'/'}>ABOUT</Link>
          </li>
          <li>
          <Link to={'/'}>SHOP</Link>
          </li>
          <li>
          <Link to={'/'}>NEW</Link>
          </li>
          <li>
            <button className="button">
          <Link to={'/'}>LOGIN</Link></button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
