import { useSelector } from "react-redux";
import CartItem from "./cart-item.styled";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems.items);

  return (
    <div className={props.className}>
      <h2 className="shopping-cart">Your Shopping Cart</h2>
      <ul>
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
  );
};
export default Cart;
