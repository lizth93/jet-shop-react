import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//own
import Button from "components/general-button/button.styled";
import setTotalAmount from "store/cart/set-total-amount";
import { sendCart } from "store/cart/send-cart";

const CartTotal = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  dispatch(setTotalAmount());

  const { authenticated, totalAmount, items, nickname } = useSelector(
    (state) => ({
      authenticated: state.itemsAuth.authenticated,
      totalAmount: state.cartItems.totalAmount,
      items: state.cartItems.items,
      nickname: state.itemsAuth.nickname,
    })
  );

  const handleGoToPay = () => {
    if (!authenticated) {
      history.push("/auth");
    }

    // const emailAnalized = /^([^]+)@(\w+).(\w+)$/.exec(email);
    // const [, name] = emailAnalized;

    dispatch(sendCart(nickname, items));
  };

  return (
    <div className="total-container">
      <h3 className="my-cart">My Cart</h3>
      <div className="action-pay">
        <span>
          Total Amount: <strong>{totalAmount.toFixed(2)}</strong>{" "}
        </span>
        <Button onClick={handleGoToPay}>Go to pay</Button>
      </div>
    </div>
  );
};

export default CartTotal;
