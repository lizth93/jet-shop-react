import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//own
import CartIcon from "../../Icons/cart";
import UserIcon from "../../Icons/user";
import LogOut from "../../Icons/log-out";
import { authActions } from "../../store/auth/auth-slice";
import setTotalQuantity from "store/cart/set-total-quantity";
import { AUTH } from "config";
import ModalAccount from "./modal-account/index.styled";
import { CART } from "config";

const NavigationIcons = (props) => {
  const dispatch = useDispatch();

  const { authenticated, quantity, items } = useSelector((state) => ({
    authenticated: state.itemsAuth.authenticated,
    quantity: state.cartItems.totalQuantity,
    items: state.cartItems.items,
  }));

  if (quantity === 0 && items !== 0) {
    dispatch(setTotalQuantity());
  }

  const logOutHandler = () => {
    dispatch(authActions.setLogout());
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

        {!authenticated && (
          <li>
            <Link to={AUTH} className="main-nav-link">
              <UserIcon />
              Login
            </Link>
          </li>
        )}

        {authenticated && <ModalAccount />}

        {authenticated && (
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
