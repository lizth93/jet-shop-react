import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
//own
import Button from "../../components/general-button/button.styled";
import { authActions } from "../../store/auth/auth-slice";
import useInput from "./use-input";
import useClassName from "./use-classname";
import { getAuth } from "../../store/auth/get-auth";
import { LENGTH_PASSWORD, REMEMBER_PWD } from "../../helpers";
import Spinner from "../../components/Spinner/spinner.styled";
import { useHistory } from "react-router-dom";
import TypeInput from "../../layout/type-input";
import LoginGoogle from "./google/login-google.styled";
import { useEffect } from "react";

const Auth = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.setMessage(""));
  }, [dispatch]);

  const { isLogin, isLoading, token, message } = useSelector((state) => ({
    isLogin: state.itemsAuth.isLogin,
    isLoading: state.itemsAuth.isLoading,
    token: state.itemsAuth.token,
    message: state.itemsAuth.message,
  }));

  if (token) {
    history.goBack();
  }
  const switchAuthModeHandler = (e) => {
    dispatch(authActions.setIsLogin());
    dispatch(authActions.setMessage(false));
  };

  const validateEmail = (value) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
  const validatePassword = (value) => value.trim().length >= LENGTH_PASSWORD;

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
      {message && <p className="error error-text">{message}</p>}
      <form className="form-control" onSubmit={handlerFormSubmission}>
        <h1 className="heading--1">{isLogin ? "Login" : "Sing Up"}</h1>

        <TypeInput
          className={emailClassName}
          htmlFor="email"
          textLabel="Your Email:"
          type="email"
          value={email}
          hasError={hasErrorEmail}
          message="Please enter a correct Email"
          onChange={handleEmail}
          onBlur={handleEmailBlur}
        />

        <TypeInput
          className={passwordClassName}
          htmlFor="password"
          textLabel="Your Password:"
          type="password"
          value={password}
          hasError={hasErrorPassword}
          message={`The password must to have at least ${LENGTH_PASSWORD} characters`}
          onChange={handlePassword}
          onBlur={handlePasswordBlur}
        />

        {!isLoading && (
          <Button className="btn-auth" type="submit">
            {isLogin ? "Login" : "Create Account"}
          </Button>
        )}
        {isLoading && <Spinner />}
        <Link to={REMEMBER_PWD} className="forgot-pws">
          Forgot Password?
        </Link>
        <button
          type="button"
          className="btn-auth btn-option"
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </form>
      <LoginGoogle />
    </div>
  );
};
export default Auth;
