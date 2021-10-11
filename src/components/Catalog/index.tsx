import { useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { useCategoriesQuery, useProductsQuery } from "../../app/api";
import { IParams } from "../../types";
import { PageHeader, ProductsList } from "../";
import Spinner from "../../helpers/Spinner";
import Filters from "./Filters";

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { gender, cat }: IParams = useParams();
  const { isLoading: prodLoading } = useProductsQuery();
  const { isLoading: catLoading } = useCategoriesQuery();

  const { filteredProducts } = useProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      filteredProducts:
        !gender && !cat
          ? data
          : data?.filter((el) =>
              cat
                ? el.gender === gender && el.category === cat
                : el.gender === gender
            ),
    }),
  });

  const { genders } = useCategoriesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      genders: data?.map((el) => el.gender),
    }),
  });

  const productsPerPage = 9;
  const indexOfLastProduct = currentPage * productsPerPage;
  const currentProducts = filteredProducts?.slice(0, indexOfLastProduct);

  if (catLoading || prodLoading) {
    return (
      <>
        <PageHeader />
        <Filters />
        <section className="catalog-empty pad" aria-label="empty result">
          <div className="container">
            <Spinner />
          </div>
        </section>
      </>
    );
  }

  if (gender && !genders?.includes(gender)) return <Redirect to="/catalog" />;

  if (gender && filteredProducts?.length === 0) {
    return (
      <>
        <PageHeader />
        <Filters />
        <section className="catalog-empty pad" aria-label="empty result">
          <div className="container">
            <h2 className="empty-title">No matching products</h2>
            <Link to="/catalog">
              <button className="btn gray">back to catalog</button>
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader />
      <Filters />
      <section className="catalog pad" aria-label="catalog">
        <div className="container">
          {currentProducts && <ProductsList products={currentProducts} />}
          {currentProducts &&
            filteredProducts &&
            currentProducts.length < filteredProducts.length && (
              <button
                className="btn gray"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Show more
              </button>
            )}
        </div>
      </section>
    </>
  );
};

export default Catalog;
