import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineDiscount } from "react-icons/md";
import {SlCompass} from "react-icons/sl"
import { FiUser } from "react-icons/fi";

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
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <SlCompass
              fill={pathMatchRoute("/") ? "rgb(75,136,162)" : "rgb(68,56,80)"}
              height="36px"
              width="36px"
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <MdOutlineDiscount
              fill={
                pathMatchRoute("/offers") ? "rgb(75,136,162)" : "rgb(68,56,80)"
              }
              height="36px"
              width="36px"
            />
            <p
              className={
                pathMatchRoute("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <FiUser
              fill={
                pathMatchRoute("/profile") ? "rgb(75,136,162)" : "rgb(68,56,80)"
              }
              height="36px"
              width="36px"
            />
            <p
              className={
                pathMatchRoute("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
