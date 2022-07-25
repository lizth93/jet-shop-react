import { LENGTH_PASSWORD } from "../../store/config";
import Button from "../pagination/general-button/button.styled";
import useInput from "../Auth/use-input";

const ProfileForm = (props) => {
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

    // dispatch(getAuth(email, password, isLogin));
    resetPasswordInput();
  };

  return (
    <div className={props.className}>
      <form className="form-control" onSubmit={handlerFormSubmission}>
        <h1 className="heading--1">Settings</h1>
        <div>
          <label htmlFor="password">New Password:</label>
          <br />
          <input
            type="password"
            id="password"
            required
            autoComplete="on"
            value={password}
            onChange={handlePassword}
            onBlur={handlePasswordBlur}
          />

          {hasErrorPassword && (
            <p className="error-text">
              The password must to have at least {LENGTH_PASSWORD} characters.
            </p>
          )}
        </div>

        <Button type="button" className="btn-auth btn-option">
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
