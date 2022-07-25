import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
//own
import Button from "../pagination/general-button/button.styled";
import { authActions } from "../../store/auth/auth-slice";
import useInput from "./use-input";
import useClassName from "./use-classname";
import { getAuth } from "../../store/auth/get-auth";

const Auth = (props) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => ({
    isLogin: state.itemsAuth.authenticated,
  }));

  const switchAuthModeHandler = () => {
    dispatch(authActions.setAuthenticated());
  };

  const validateEmail = (value) => value.trim() !== "" && value.includes("@");
  const validatePassword = (value) => value.trim().length >= 7;

  const {
    value: email,
    isValid: isValidEmail,
    hasError: hasErrorEmail,
    inputChangeHandler: handleEmail,
    inputOnBlurHandler: handleEmailBlur,
    reset: resetEmailInput,
  } = useInput(validateEmail);
  const {
    value: password,
    isValid: isValidPassword,
    hasError: hasErrorPassword,
    inputChangeHandler: handlePassword,
    inputOnBlurHandler: handlePasswordBlur,
    reset: resetPasswordInput,
  } = useInput(validatePassword);

  const formIsValid = isValidEmail && isValidPassword;

  const handlerFormSubmission = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    dispatch(getAuth(email, password, isLogin));
    resetEmailInput();
    resetPasswordInput();
  };

  const emailClassName = useClassName(hasErrorEmail);
  const passwordClassName = useClassName(hasErrorPassword);

  return (
    <div className={props.className}>
      <form className="form-control" onSubmit={handlerFormSubmission}>
        <h1 className="heading--1">Sing Up</h1>
        <div className={emailClassName}>
          <label htmlFor="email">Your Email:</label>
          <br />
          <input
            type="email"
            id="email"
            required
            onChange={handleEmail}
            onBlur={handleEmailBlur}
            autoComplete="on"
            value={email}
          />
          {hasErrorEmail && (
            <p className="error-text">Please enter a correct Email</p>
          )}
        </div>
        <div className={passwordClassName}>
          <label htmlFor="password">Your Password:</label>
          <br />
          <input
            type="password"
            id="password"
            required
            onChange={handlePassword}
            onBlur={handlePasswordBlur}
            autoComplete="on"
            value={password}
          />

          {hasErrorPassword && (
            <p className="error-text">
              The password must to have at least 7 characters.
            </p>
          )}
        </div>
        <Button className="btn-auth" type="submit">
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
