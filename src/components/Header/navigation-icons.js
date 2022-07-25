import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//own
import CartIcon from "./Icons/cart";
import LogIn from "./Icons/log-in";
import LogOut from "./Icons/log-out";
import { authActions } from "../../store/auth/auth-slice";

const NavigationIcons = (props) => {
  const dispatch = useDispatch();

  const authenticated = useSelector((state) => state.itemsAuth.authenticated);
  const logOutHandler = () => {
    dispatch(authActions.setLogout());
  };

  return (
    <nav className={props.className}>
      <ul className="main-nav-list">
        <li>
          <Link className="main-nav-link" to="/">
            <CartIcon />
            Cart
          </Link>
        </li>
        <li>
          {!authenticated && (
            <Link to="/auth" className="main-nav-link">
              <LogIn />
              Login
            </Link>
          )}

          {authenticated && (
            <Link to="/auth" className="main-nav-link" onClick={logOutHandler}>
              <LogOut />
              Logout
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default NavigationIcons;
