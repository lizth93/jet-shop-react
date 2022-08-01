import Spinner from "components/Spinner/spinner.styled";
import { useSelector } from "react-redux";
//own
import CartItem from "./item.styled";
import CartTotal from "./total-pay";
const Cart = (props) => {
  const { cartItems, cartSended, isLoading } = useSelector((state) => ({
    cartItems: state.cartItems.items,
    cartSended: state.cartItems.cartSended,
    isLoading: state.cartItems.isLoading,
  }));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={props.className}>
      <h2 className="title-cart">Your Shopping Cart</h2>
      <div className="cart">
        <div>
          <ul>
            {cartSended && (
              <p className="shopping-cart" style={{ color: "#6741d9" }}>
                The order has been sent successfully!!!
              </p>
            )}
            {cartItems.length === 0 && !cartSended && (
              <p className="shopping-cart">The Cart is empty!</p>
            )}
            {!cartSended &&
              cartItems.map((item) => (
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
        {!cartSended && cartItems.length !== 0 && <CartTotal />}
      </div>
    </div>
  );
};
export default Cart;
