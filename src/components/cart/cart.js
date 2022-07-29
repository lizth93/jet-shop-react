import { useSelector } from "react-redux";
//own
import CartItem from "./cart-item.styled";
import CartTotal from "./cart-total";

const Cart = (props) => {
  const { cartItems } = useSelector((state) => ({
    cartItems: state.cartItems.items,
  }));

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
        {cartItems.length !== 0 && <CartTotal />}
      </div>
    </div>
  );
};
export default Cart;
