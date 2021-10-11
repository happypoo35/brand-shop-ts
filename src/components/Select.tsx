import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { IParams, ISetting } from "../types";

// interface props {
//   title: string;
//   options: string[];
// }

const Select = ({ title, options }: ISetting) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [showSelect, setShowSelect] = useState(false);
  const { cat }: IParams = useParams();

  useEffect(() => {
    const closeSelect = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!selectRef.current?.contains(target)) {
        setShowSelect(false);
      }
    };
    document.addEventListener("mousedown", closeSelect);
    return () => {
      document.removeEventListener("mousedown", closeSelect);
    };
  });

  return (
    <div
      className={showSelect ? "filter-select show" : "filter-select"}
      ref={selectRef}
    >
      <span className="select-btn" onClick={() => setShowSelect(!showSelect)}>
        {title}
        <FaChevronDown />
      </span>
      <ul className="select-drop">
        {title === "gender"
          ? options.map((el, id) => {
              return (
                <li key={id} onClick={() => setShowSelect(false)}>
                  <Link to={cat ? `/catalog/${el}/${cat}` : `/catalog/${el}`}>
                    {el}
                  </Link>
                </li>
              );
            })
          : options.map((el, id) => {
              return (
                <li key={id} onClick={() => setShowSelect(false)}>
                  {el}
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default Select;
