import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useProductsQuery } from "../app/api";

const PageHeader = () => {
  const [crumbs, setCrumbs] = useState<string[]>([]);
  const { pathname } = useLocation();
  const { id }: { id: string } = useParams();
  const title = crumbs[crumbs.length - 1];

  const { product } = useProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      product: data?.find((el) => el.id === +id),
    }),
  });

  useEffect(() => {
    if (pathname.includes("product")) {
      setCrumbs([
        "catalog",
        product?.gender as string,
        product?.category as string,
        product?.title as string,
      ]);
    } else {
      setCrumbs(pathname.slice(1).split("/"));
    }
  }, [pathname, product?.category, product?.gender, product?.title]);

  return (
    <header className={`page-header ${title}-header pad`}>
      <div className="container">
        <h1 className="page-title pink">{title}</h1>
        <div className="bc">
          <Link to="/" className="bc-link">
            home
          </Link>
          {crumbs.map((el, id) => (
            <Link
              key={id}
              to={`/${crumbs.slice(0, id + 1).join("/")}`}
              className={el === title ? "bc-link pink" : "bc-link"}
            >
              {el}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
