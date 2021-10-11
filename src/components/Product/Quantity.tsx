import { Dispatch, SetStateAction } from "react";

interface props {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

const Quantity = ({ quantity, setQuantity }: props) => {
  return (
    <div className="quantity">
      <span className="quantity-label">quantity</span>
      <button
        className="quantity-btn"
        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
      >
        -
      </button>
      <span className="quantity-num">{quantity}</span>
      <button
        className="quantity-btn"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
