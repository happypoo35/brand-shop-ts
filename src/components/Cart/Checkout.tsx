import { useAppSelector } from "../../app/hooks";

const Checkout = () => {
  const total = useAppSelector((state) =>
    state.cart.reduce((acc, el) => {
      const itemTotal = el.price * el.amount;
      acc += itemTotal;

      return acc;
    }, 0)
  );

  return (
    <article className="checkout">
      <div className="order-price">
        <span className="subtotal">
          sub total
          <span className="subtotal-amount">${(total * 0.95).toFixed(2)}</span>
        </span>
        <span className="total">
          grand total
          <span className="total-amount pink">${total.toFixed(2)}</span>
        </span>
      </div>
      <button className="btn btn-solid-pink">proceed to checkout</button>
    </article>
  );
};

export default Checkout;
