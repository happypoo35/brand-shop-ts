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
    <section
      className={`fixed right-0 bg-white py-4 pr-5 pl-9 w-56 overflow-y-scroll shadow-xl no-scrollbar transition-all transform ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }
      `}
      style={{ height: "calc(100% - 4.625rem)" }}
      ref={menuRef}
    >
      <IconClose
        className="block cursor-pointer ml-auto mb-2"
        onClick={() => setShowMenu(false)}
      />
      <h6 className="text-sm font-bold text-grayText uppercase mb-6">menu</h6>
      <nav className="grid gap-4">
        {menuItems?.map((menuItem, id) => (
          <div key={id} className="grid">
            <Link
              to={`/catalog/${menuItem.gender}`}
              onClick={() => setShowMenu(false)}
              className="text-sm text-accent uppercase mb-2"
            >
              {menuItem.gender}
            </Link>
            <div className="grid gap-2 ml-5">
              {menuItem.categories.map((link, index) => (
                <Link
                  key={index}
                  className="text-sm text-grayText capitalize"
                  to={`/catalog/${menuItem.gender}/${link}`}
                  onClick={() => setShowMenu(false)}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <Link
          to="/catalog"
          onClick={() => setShowMenu(false)}
          className="text-sm text-accent uppercase mb-3"
        >
          all products
        </Link>
      </nav>
    </section>
  );
};

export default Menu;
