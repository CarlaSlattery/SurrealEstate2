import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineDiscount } from "react-icons/md";
import { FiSearch, FiUser } from "react-icons/fi";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarItem" onClick={() => navigate("/")}>
            <FiSearch
              fill={pathMatchRoute("/") ? "hsl(0, 0%, 17%)" : "hsl(0, 0%, 56%)"}
              height="36px"
              width="36px"
            />
            <p>Explore</p>
          </li>
          <li className="navbarItem" onClick={() => navigate("/offers")}>
            <MdOutlineDiscount
              fill={
                pathMatchRoute("/offers")
                  ? "hsl(0, 0%, 17%)"
                  : "hsl(0, 0%, 56%)"
              }
              height="36px"
              width="36px"
            />
            <p>Offers</p>
          </li>
          <li className="navbarItem" onClick={() => navigate("/sign-in")}>
            <FiUser
              fill={
                pathMatchRoute("/sign-in")
                  ? "hsl(0, 0%, 17%)"
                  : "hsl(0, 0%, 56%)"
              }
              height="36px"
              width="36px"
            />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
