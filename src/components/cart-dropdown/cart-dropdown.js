import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { CartItem } from "../cart-item/cart-item";
import { CartContext } from "../context/cart";
import "./cart-dropdown.styles.scss";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
}
