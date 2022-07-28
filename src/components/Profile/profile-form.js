import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//own
import { LENGTH_PASSWORD } from "../../config";
import Button from "../general-button/button.styled";
import useInput from "../Auth/use-input";
import { changePassword } from "../../store/auth/change-pwd";
import TypeInput from "../layout/type-input";
import useClassName from "../Auth/use-classname";

const ProfileForm = (props) => {
  const history = useHistory();
  const { token, authenticated } = useSelector((state) => ({
    token: state.itemsAuth.token,
    authenticated: state.itemsAuth.authenticated,
  }));

  console.log(authenticated, "authenticated?");
  if (!authenticated) {
    history.push("/auth");
  }

  const dispatch = useDispatch();

  const validatePassword = (value) => value.trim().length >= LENGTH_PASSWORD;
  const {
    value: password,
    isValid: isValidPassword,
    hasError: hasErrorPassword,
    inputChangeHandler: handlePassword,
    inputOnBlurHandler: handlePasswordBlur,
    reset: resetPasswordInput,
  } = useInput(validatePassword);

  const handlerFormSubmission = (e) => {
    e.preventDefault();
    if (!isValidPassword) {
      return;
    }

    dispatch(changePassword(token, password));
    resetPasswordInput();
  };
  const passwordClassName = useClassName(hasErrorPassword);
  return (
    <div className={props.className}>
      <form className="form-control" onSubmit={handlerFormSubmission}>
        <h1 className="heading--1">Settings</h1>

        <TypeInput
          className={passwordClassName}
          htmlFor="password"
          textLabel="New Password:"
          type="password"
          value={password}
          hasError={hasErrorPassword}
          message={`The password must to have at least ${LENGTH_PASSWORD} characters`}
          onChange={handlePassword}
          onBlur={handlePasswordBlur}
        />

        <Button type="submit" className="btn-auth btn-option">
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
