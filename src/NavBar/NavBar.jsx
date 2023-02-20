import "./NavBar.css";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">Shop</Link>
      <Link className="cartIcon" to="/cartPage">
        <ShoppingCart size={25} />
      </Link>
    </div>
  );
};

export default NavBar;
