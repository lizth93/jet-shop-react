import Spinner from "components/Spinner/spinner.styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//own
import CartItem from "./item/cart-item.styled";
import CartTotal from "./total-pay";
import Button from "components/general-button/button.styled";
import removeProduct from "store/cart/remove-product";
import addProduct from "store/cart/add-product";
import { HISTORY } from "config";
import { useEffect } from "react";
import { cartActions } from "store/cart/cart-slice";

const Cart = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartItems, cartSended, isLoading } = useSelector((state) => ({
    cartItems: state.cartItems.items,
    cartSended: state.cartItems.cartSended,
    isLoading: state.cartItems.isLoading,
  }));

  useEffect(() => {
    dispatch(cartActions.setIsSended(false));
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  const removeItemHandler = (item) => {
    dispatch(removeProduct(item));
  };
  const addItemHandler = (item) => {
    dispatch(addProduct(item));
  };
  const handleGoShoppingHistory = () => {
    history.push(HISTORY);
  };

  return (
    <div className={props.className}>
      <h2 className="title-cart">Your Shopping Cart</h2>
      <div className="cart">
        <div>
          <ul>
            {cartSended && (
              <div className="successfully-items">
                <p className="shopping-cart" style={{ color: "#6741d9" }}>
                  The order has been sent successfully!!! -Check the shopping
                  history
                </p>
                <Button onClick={handleGoShoppingHistory}>
                  Shopping History
                </Button>
              </div>
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
                >
                  <Button
                    onClick={() => {
                      removeItemHandler(item);
                    }}
                  >
                    -
                  </Button>
                  <Button
                    onClick={() => {
                      addItemHandler(item);
                    }}
                  >
                    +
                  </Button>
                </CartItem>
              ))}
          </ul>
        </div>

        {!cartSended && cartItems.length !== 0 && <CartTotal />}
      </div>
    </div>
  );
};
export default Cart;
