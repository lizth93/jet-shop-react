import { useSelector } from "react-redux";
import CartItem from "./cart-item.styled";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems.items);
  console.log(cartItems, "cartItems");
  return (
    <div>
      <h2>Your Shopping Cart</h2>
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
            }}
          />
        ))}
      </ul>
    </div>
  );
};
export default Cart;
