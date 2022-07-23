import Button from "../pagination/general-button/button.styled";
import { useState } from "react";

const Auth = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <div className={props.className}>
      <form className="form-elements">
        <h1 className="heading--1">Sing Up</h1>
        <div>
          <label htmlFor="email">Your Email:</label>
          <br />
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Your Password:</label>
          <br />
          <input type="password" id="password" required />
        </div>
        {/* <Button className="btn-auth" type="submit">
          Login
        </Button> */}

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
