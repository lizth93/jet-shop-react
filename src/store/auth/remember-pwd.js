import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { authActions } from "./auth-slice";

export const rememberPwd = (email) => {
  return (dispatch) => {
    dispatch(authActions.setIsLoading(true));
    sendPasswordResetEmail(auth, email)
      .then(() => {
        dispatch(authActions.setMessage("Password reset email sent!"));
        dispatch(authActions.setIsLoading(false));
      })
      .catch((error) => {
        const codeError = error.code;
        dispatch(authActions.setIsLoading(false));

        if (codeError === "auth/user-not-found") {
          dispatch(
            authActions.setMessage("Invalid Email. The Email doesn't Exist!")
          );
        } else {
          dispatch(authActions.setMessage(codeError));
        }
      });
  };
};
