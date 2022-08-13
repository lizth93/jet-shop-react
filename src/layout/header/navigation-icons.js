import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//own
import CartIcon from "../../Icons/cart";
import UserIcon from "../../Icons/user";
import LogOut from "../../Icons/log-out";
import { authActions } from "../../store/auth/auth-slice";
import { cartActions } from "store/cart/cart-slice";
import setTotalQuantity from "store/cart/set-total-quantity";
import { AUTH } from "config";
import ModalAccount from "./modal-account/index.styled";
import { CART } from "config";

const NavigationIcons = (props) => {
  const dispatch = useDispatch();

  const { token, quantity, items } = useSelector((state) => ({
    token: state.itemsAuth.token,
    quantity: state.cartItems.totalQuantity,
    items: state.cartItems.items,
  }));

  if (quantity === 0 && items !== 0) {
    dispatch(setTotalQuantity());
  }

  const logOutHandler = () => {
    dispatch(authActions.setLogout());
    dispatch(cartActions.removeItems());
  };

  return (
    <nav className={props.className}>
      <ul className="main-nav-list">
        <li>
          <Link className="main-nav-link" to={CART}>
            <CartIcon />
            Cart
            {quantity !== 0 && <span className="items-cart">{quantity}</span>}
          </Link>
        </li>

        {!token && (
          <li>
            <Link to={AUTH} className="main-nav-link">
              <UserIcon />
              Login
            </Link>
          </li>
        )}

        {token && <ModalAccount />}

        {token && (
          <li>
            <Link to={AUTH} className="main-nav-link" onClick={logOutHandler}>
              <LogOut />
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default NavigationIcons;
