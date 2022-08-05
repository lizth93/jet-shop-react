import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//own
import Button from "components/general-button/button.styled";
import setTotalAmount from "store/cart/set-total-amount";
import { sendCart } from "store/cart/send-cart";
import BankIcon from "Icons/bank";
import AddIcon from "Icons/add";

const CartTotal = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  dispatch(setTotalAmount());

  const { authenticated, totalAmount, items, email } = useSelector((state) => ({
    authenticated: state.itemsAuth.authenticated,
    totalAmount: state.cartItems.totalAmount,
    items: state.cartItems.items,
    email: state.itemsAuth.email,
  }));

  const handleGoToPay = () => {
    if (!authenticated) {
      history.push("/auth");
    }

    dispatch(sendCart(email, items));
  };

  const handleAddMore = () => {
    history.push("/products");
  };

  return (
    <div className="total-container">
      <h3 className="my-cart">My Cart</h3>
      <div className="action-pay">
        <span>
          Total Amount: <strong>{totalAmount.toFixed(2)}</strong>{" "}
        </span>
        <div className="cta-buttons">
          <Button className="btn-cta" onClick={handleGoToPay}>
            <BankIcon />
            <span>Go to pay</span>
          </Button>
          <Button className="btn-add" onClick={handleAddMore}>
            <AddIcon />
            <span>Add More</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
