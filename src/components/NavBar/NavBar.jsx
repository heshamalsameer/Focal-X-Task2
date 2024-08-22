import "./NavBar.css";
import Schedule from "./Schedule/Schedule";
import { FaBarsStaggered } from "react-icons/fa6";
import Top from "./top/Top";

function NavBar() {
  function showMenu() {
    const menu = document.querySelector(".ulmenu");
    menu.classList.toggle("active");
  }
  return (
    <>
      <div className="NavBar">
        <h2>VILLA</h2>
        <ul className="ulNavBar">
          <li className="home">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Properties</a>
          </li>
          <li>
            <a href="">Property Details</a>
          </li>
          <li>
            <a href="">Contact Us </a>
          </li>
          <li>
            <Schedule />
          </li>
        </ul>
        <div className="menu" onClick={showMenu}>
          <FaBarsStaggered size={22} />
        </div>
      </div>
      <ul className="ulmenu">
        <li className="home">
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Properties</a>
        </li>
        <li>
          <a href="">Property Details</a>
        </li>
        <li>
          <a href="">Contact Us </a>
        </li>
        <div>
          <Schedule />
        </div>
        <div>
          <Top />
        </div>
      </ul>
    </>
  );
}

export default NavBar;
