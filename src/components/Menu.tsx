import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { ReactComponent as IconClose } from "../images/icon-close.svg";
import { Link } from "react-router-dom";
import { useCategoriesQuery } from "../app/api";

interface props {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ showMenu, setShowMenu }: props) => {
  const menuRef = useRef<HTMLElement>(null);
  const { data: menuItems } = useCategoriesQuery();

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !menuRef.current?.contains(target) &&
        target.classList[0] !== "hamburger"
      ) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  return (
    <section className={showMenu ? "menu show" : "menu"} ref={menuRef}>
      <IconClose className="btn-close" onClick={() => setShowMenu(false)} />
      <h6>menu</h6>
      <nav className="nav">
        {menuItems?.map((menuItem, id) => (
          <div key={id} className="nav-block">
            <Link
              to={`/catalog/${menuItem.gender}`}
              onClick={() => setShowMenu(false)}
            >
              <h6 className="pink">{menuItem.gender}</h6>
            </Link>
            {menuItem.categories.map((link, index) => (
              <Link
                key={index}
                className="nav-link"
                to={`/catalog/${menuItem.gender}/${link}`}
                onClick={() => setShowMenu(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        ))}
        <Link to="/catalog" onClick={() => setShowMenu(false)}>
          <h6 className="pink">all products</h6>
        </Link>
      </nav>
    </section>
  );
};

export default Menu;
