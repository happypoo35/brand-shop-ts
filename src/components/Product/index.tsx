import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ReactComponent as CartIcon } from "../../images/icon-cart.svg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PageHeader, Select, ProductsList } from "..";
import { useProductsQuery } from "../../app/api";
import Quantity from "./Quantity";
import Spinner from "../../helpers/Spinner";

import { useAppDispatch } from "../../app/hooks";
import { add } from "../../features/cartSlice";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { id }: { id: string } = useParams();
  const { isLoading } = useProductsQuery();

  const dispatch = useAppDispatch();

  const { product } = useProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      product: data?.find((el) => el.id === +id),
    }),
  });

  const { products } = useProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      products: data?.filter((el) => el.id <= 3),
    }),
  });

  const handleAddToCart = () => {
    if (product) {
      setAdded(true);
      dispatch(add({ ...product, amount: quantity }));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdded(false);
      setQuantity(1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [added]);

  if (isLoading)
    return (
      <>
        <PageHeader />
        <header className="product-header pad">
          <Spinner />
        </header>
        <section className="product-page pad">
          <div className="container">
            <Spinner />
          </div>
        </section>
      </>
    );

  return (
    <>
      <PageHeader />
      <header className="product-header pad">
        <div className="container">
          <img src={product?.img} alt={product?.title} />
        </div>
      </header>
      <section className="product-page pad">
        <div className="container">
          <div className="product-page-info">
            <div className="info-container">
              <header className="info-header">
                <h6 className="pink">{product?.gender} collection</h6>
                <h5>{product?.title}</h5>
                <p>{product?.desc}</p>
                <span className="product-price pink">
                  ${product?.price.toFixed(2)}
                </span>
              </header>
              <div className="info-selects">
                {product?.settings.map((el, id) => {
                  return <Select key={id} {...el} />;
                })}
                <Quantity quantity={quantity} setQuantity={setQuantity} />
              </div>
              {!added ? (
                <button
                  className="btn btn-cart-product"
                  onClick={handleAddToCart}
                >
                  <CartIcon />
                  Add to Cart
                </button>
              ) : (
                <button
                  className="btn btn-cart-product btn-cart-product-added"
                  disabled={true}
                >
                  <AiOutlineCheckCircle className="icon-added" />
                  Added
                </button>
              )}
            </div>
          </div>
          {products && <ProductsList products={products} />}
        </div>
      </section>
    </>
  );
};

export default Product;
