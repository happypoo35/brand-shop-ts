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
      <header className="sticky top-0 w-full bg-darkGray py-5 z-10 pad">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" aria-label="home page">
              <Logo />
            </Link>
            <IconSearch />
          </div>
          <div className="flex items-center gap-8">
            <div
              className="hamburger"
              onClick={() => setShowMenu(!showMenu)}
            >
              <IconHamburger className="pointer-events-none" />
            </div>
            <Link to="/registration" aria-label="user">
              <IconUser className="profile" />
            </Link>
            <Link to="/cart" aria-label="cart">
              <div className="cart-icon">
                <IconCart className="text-3xl text-lightGray" />
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
