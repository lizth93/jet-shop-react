import Button from "components/general-button/button.styled";
import { useSelector } from "react-redux";
import CartItem from "./cart-item.styled";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems.items);

  return (
    <div className={props.className}>
      <h2 className="title-cart">Your Shopping Cart</h2>
      <div className="cart">
        <div>
          <ul>
            {cartItems.length === 0 && (
              <p className="shopping-cart">The Cart is empty!</p>
            )}
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  quantity: item.quantity,
                  price: item.price,
                  totalPrice: item.totalPrice,
                  image: item.image,
                  discount: item.discount,
                }}
              />
            ))}
          </ul>
        </div>
        <div className="subtotal-container">
          <h3>subtotal</h3>
          <div>Total:</div>
          <Button>Go to pay</Button>
          <span></span>
        </div>
      </div>
    </div>
  );
};
export default Cart;
