import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ReactComponent as IconCart } from "../images/icon-cart.svg";
import { IProduct } from "../types";

import { useAppDispatch } from "../app/hooks";
import { add } from "../features/cartSlice";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { id, img, title, text, price } = product;
  const [added, setAdded] = useState(false);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(add(product));
    setAdded(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdded(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [added]);

  return (
    <article className="product-card" aria-label="product">
      <div className="product-card-img">
        <img src={img} alt="img" />
        <div className="div card-hover">
          {!added ? (
            <button className="btn btn-cart" onClick={handleClick}>
              <IconCart />
              Add to Cart
            </button>
          ) : (
            <button className="btn btn-cart btn-cart-added">
              <AiOutlineCheckCircle />
              Added
            </button>
          )}
        </div>
      </div>
      <Link to={`/product/${id}`}>
        <div className="product-card-info">
          <h4>{title}</h4>
          <p>{text}</p>
          <span className="card-price pink">${price.toFixed(2)}</span>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
