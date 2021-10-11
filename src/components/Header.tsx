import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconCart } from "../images/icon-cart.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as IconHamburger } from "../images/icon-hamburger.svg";
import { ReactComponent as IconUser } from "../images/icon-profile.svg";
import { ReactComponent as IconSearch } from "../images/icon-search.svg";
import { Menu } from "./";
import { useAppSelector } from "../app/hooks";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const cart = useAppSelector((state) => state.cart);

  return (
    <>
      <header className="header pad">
        <div className="container">
          <div className="header-left">
            <Link to="/" aria-label="home page">
              <Logo />
            </Link>
            <IconSearch className="search" />
          </div>
          <div className="header-right">
            <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
              <IconHamburger />
            </div>
            <Link to="/registration" aria-label="user">
              <IconUser className="profile" />
            </Link>
            <Link to="/cart" aria-label="cart">
              <div className="cart-icon">
                <IconCart />
                {cart.length > 0 && (
                  <span className="cart-number">{cart.length}</span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </header>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Header;
