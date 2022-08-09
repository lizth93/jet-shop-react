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
  const { cartItems, hasError, isLoading, isSended } = useSelector((state) => ({
    cartItems: state.cartItems.items,
    hasError: state.cartItems.hasError,
    isLoading: state.cartItems.isLoading,
    isSended: state.cartItems.isSended,
  }));

  useEffect(() => {
    dispatch(cartActions.setIsSended(null));
    dispatch(cartActions.setHasError(null));
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
            {isSended && (
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
            {cartItems.length === 0 && !hasError && !isSended && (
              <p className="shopping-cart">The Cart is empty!</p>
            )}
            {!hasError &&
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

        {!hasError && cartItems.length !== 0 && <CartTotal />}
      </div>
    </div>
  );
};
export default Cart;
