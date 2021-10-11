import { Link } from "react-router-dom";
import { useProductsQuery } from "../../app/api";
import { ProductsList } from "../";
import Spinner from "../../helpers/Spinner";

const Featured = () => {
  const { isLoading } = useProductsQuery();
  const { featured } = useProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      featured: data?.filter((el) => el.isFeatured),
    }),
  });

  if (isLoading) return <Spinner />;

  return (
    <section className="featured-products pad" aria-label="featured products">
      <div className="container">
        <h2>Featured Items</h2>
        <p className="subtitle">
          Shop for items based on what we featured in this week
        </p>
        {featured && <ProductsList products={featured} />}
        <Link to="/catalog">
          <button className="btn btn-pink">Browse All Product</button>
        </Link>
      </div>
    </section>
  );
};

export default Featured;
