import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import Form from "./Form";
import ProductCard from "./CartItem";
import { PageHeader } from "../";
import { ReactComponent as IconCart } from "../../images/icon-cart.svg";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clear } from "../../features/cartSlice";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(clear());
    window.scrollTo(0, 0);
  };

  if (cart.length === 0) {
    return (
      <>
        <PageHeader />
        <section className="cart-empty pad" aria-label="empty shopping cart">
          <div className="container">
            <IconCart />
            <h2 className="empty-title">Your cart is empty</h2>
            <Link to="/catalog">
              <button className="btn gray">start shopping</button>
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader />
      <section className="cart pad" aria-label="cart">
        <div className="container">
          <div className="cart-items">
            {cart.map((el) => {
              return <ProductCard key={el.id} item={el} />;
            })}
            <div className="cart-buttons">
              <button className="btn gray" onClick={handleClick}>
                clear shopping cart
              </button>
              <Link to="/catalog">
                <button className="btn gray">continue shopping</button>
              </Link>
            </div>
          </div>
          <div className="cart-controls">
            <Form />
            <Checkout />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
