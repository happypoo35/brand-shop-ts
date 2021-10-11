import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCategoriesQuery } from "../../app/api";
import { ReactComponent as FilterIcon } from "../../images/icon-filter.svg";
import { IParams } from "../../types";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { gender }: IParams = useParams();
  const filterRef = useRef<HTMLDivElement>(null);

  const { categories } = useCategoriesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      categories: [...new Set(data?.map((el) => el.categories).flat())].sort(),
    }),
  });

  useEffect(() => {
    const closeFilter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!filterRef.current?.contains(target)) {
        setShowFilter(false);
      }
    };
    document.addEventListener("mousedown", closeFilter);
    return () => {
      document.removeEventListener("mousedown", closeFilter);
    };
  });

  return (
    <div className={showFilter ? "filter active" : "filter"} ref={filterRef}>
      <span className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
        <span className="filter-btn-label">filter</span>
        <FilterIcon />
      </span>
      <div className="filter-drop">
        <div className="filter-section">
          <h6 className="filter-title pink">category</h6>
        </div>
        <ul className="cat-list">
          {categories?.map((el, id) => (
            <li key={id} onClick={() => setShowFilter(false)}>
              <Link
                className="cat-link"
                to={`/catalog/${gender ? gender : "men"}/${el}`}
              >
                {el}
              </Link>
            </li>
          ))}
        </ul>
        <div className="filter-section">
          <h6 className="filter-title">brand</h6>
        </div>
        <div className="filter-section">
          <h6 className="filter-title">designer</h6>
        </div>
      </div>
    </div>
  );
};

export default Filter;
