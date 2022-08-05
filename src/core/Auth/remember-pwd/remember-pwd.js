import { useDispatch, useSelector } from "react-redux";

//own
import TypeInput from "layout/type-input";
import useInput from "../use-input";
import useClassName from "../use-classname";
import Button from "components/general-button/button.styled";
import { rememberPwd } from "store/auth/remember-pwd";
import Spinner from "components/Spinner/spinner.styled";

const RememberPwd = (props) => {
  const dispatch = useDispatch();
  const { isLoading, message } = useSelector((state) => ({
    isLoading: state.itemsAuth.isLoading,
    message: state.itemsAuth.message,
  }));

  const validateEmail = (value) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);

  const {
    value: email,
    isValid: isValidEmail,
    hasError: hasErrorEmail,
    inputChangeHandler: handleEmail,
    inputOnBlurHandler: handleEmailBlur,
    reset: resetEmailInput,
  } = useInput(validateEmail);

  const handlerFormSubmission = (e) => {
    e.preventDefault();
    if (!isValidEmail) {
      return;
    }
    dispatch(rememberPwd(email));
    resetEmailInput();
  };

  const emailClassName = useClassName(hasErrorEmail);
  return (
    <div className={props.className}>
      {message && <p className="successful">{message}</p>}
      <form className="form-control" onSubmit={handlerFormSubmission}>
        <h1 className="heading--1">Recover Password:</h1>

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

        <Button type="submit" className="btn-send">
          {isLoading && <Spinner className="spinner" />}
          <span>Send</span>
        </Button>
      </form>
    </div>
  );
};
export default RememberPwd;
