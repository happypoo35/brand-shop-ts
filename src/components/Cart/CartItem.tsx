import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { IProduct } from "../../types";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { add, dec, remove } from "../../features/cartSlice";
import { useRef, useState } from "react";

const CartItem = ({ item }: { item: IProduct }) => {
  const { price, amount, img, title, id } = item;
  const [isRemoving, setIsRemoving] = useState(false);
  const itemRef = useRef<HTMLElement>(null);

  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const handleRemove = () => {
    setIsRemoving(true);
    if (cart.length > 1) {
      itemRef.current?.addEventListener("animationend", () => {
        dispatch(remove(id));
      });
    } else {
      dispatch(remove(id));
    }
  };

  const handleDec = () => {
    if (amount > 1) {
      dispatch(dec(id));
    } else {
      handleRemove();
    }
  };

  return (
    <article
      ref={itemRef}
      className={isRemoving ? "cart-item removing" : "cart-item"}
    >
      <div className="cart-item-img">
        <img src={img} alt={title} />
      </div>
      <div className="cart-item-content">
        <div className="cart-item-header">
          <Link to={`/product/${id}`}>
            <h3 className="cart-item-title">{title}</h3>
          </Link>
          <GrClose onClick={handleRemove} />
        </div>
        <ul className="cart-item-options">
          <li>
            Price: <span className="pink">${(price * amount).toFixed(2)}</span>
          </li>
          <li>Color: Red</li>
          <li>Size: XL</li>
        </ul>
        <div className="quantity">
          <span className="quantity-label">quantity</span>
          <button className="quantity-btn" onClick={handleDec}>
            -
          </button>
          <span className="quantity-num">{amount}</span>
          <button
            className="quantity-btn"
            onClick={() => dispatch(add({ ...item, amount: 1 }))}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
