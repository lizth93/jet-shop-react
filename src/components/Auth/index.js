import { useDispatch } from "react-redux";
// import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
//own
import Button from "../pagination/general-button/button.styled";
import { authActions } from "../../store/auth-slice";

const Auth = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.itemsAuth.authenticated);

  const switchAuthModeHandler = () => {
    dispatch(authActions.setAuthenticated());
  };

  const handleEmail = (e) => {
    dispatch(authActions.setEmail(e.target.value));
  };
  const handlePassword = (e) => {
    dispatch(authActions.setPassword(e.target.value));
  };
  return (
    <div className={props.className}>
      <form className="form-elements">
        <h1 className="heading--1">Sing Up</h1>
        <div>
          <label htmlFor="email">Your Email:</label>
          <br />
          <input
            type="email"
            id="email"
            required
            onChange={handleEmail}
            autoComplete="on"
          />
        </div>
        <div>
          <label htmlFor="password">Your Password:</label>
          <br />
          <input
            type="password"
            id="password"
            required
            onChange={handlePassword}
            autoComplete="on"
          />
        </div>
        <Button className="btn-auth">
          {isLogin ? "Login" : "Create Account"}
        </Button>
        <button
          type="button"
          className="btn-auth btn-option"
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </form>
    </div>
  );
};
export default Auth;
