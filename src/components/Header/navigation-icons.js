import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//own
import CartIcon from "./Icons/cart";
import LogIn from "./Icons/log-in";
import LogOut from "./Icons/log-out";
import { authActions } from "../../store/auth/auth-slice";
import Setup from "./Icons/setup";
import setTotalQuantity from "store/cart/set-total-quantity";

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
          <Link className="main-nav-link" to="/cart">
            <CartIcon />
            Cart
            <span className="items-cart">{quantity}</span>
          </Link>
        </li>

        {!authenticated && (
          <li>
            <Link to="/auth" className="main-nav-link">
              <LogIn />
              Login
            </Link>
          </li>
        )}

        {authenticated && (
          <li>
            <Link to="/profile" className="main-nav-link">
              <Setup />
              Profile
            </Link>
          </li>
        )}

        {authenticated && (
          <li>
            <Link to="/auth" className="main-nav-link" onClick={logOutHandler}>
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
