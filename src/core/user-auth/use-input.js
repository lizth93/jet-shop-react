import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "store/auth/auth-slice";

const useInput = (validate) => {
  const dispatch = useDispatch();
  const [isValidInput, setIsValidInput] = useState("");
  const [inputIsTouched, setIsTouchendInput] = useState(false);

  const inputIsValid = validate(isValidInput);
  const hasError = !inputIsValid && inputIsTouched;

  const inputChangeHandler = (event) => {
    setIsValidInput(event.target.value);
  };

  const inputOnBlurHandler = () => {
    setIsTouchendInput(true);
    dispatch(authActions.setMessage(false));
  };

  const reset = () => {
    setIsValidInput("");
    setIsTouchendInput(false);
    dispatch(authActions.setMessage(false));
  };

  return {
    value: isValidInput,
    isValid: inputIsValid,
    hasError,
    inputChangeHandler,
    inputOnBlurHandler,
    reset,
  };
};

export default useInput;
