import { authActions } from "./auth-slice";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { KEY_SAVE_STORAGE_TOKEN } from "config";

export const getAuth = (email, password, isLogin) => {
  return async (dispatch) => {
    const fetchAuth = async () => {
      dispatch(authActions.setIsLoading(true));
      let action;
      if (isLogin) {
        action = signInWithEmailAndPassword(auth, email, password);
      } else {
        action = createUserWithEmailAndPassword(auth, email, password);
      }

      action
        .then((userCredential) => {
          const token = userCredential.user.accessToken;
          const email = userCredential.user.email;

          const loginData = [token, email];
          dispatch(authActions.setToken(token));
          dispatch(authActions.setEmail(email));

          localStorage.setItem(
            KEY_SAVE_STORAGE_TOKEN,
            JSON.stringify(loginData)
          );
        })
        .catch((error) => {
          const codeError = error.code;
          if (codeError === "auth/email-already-in-use") {
            dispatch(
              authActions.setMessage("Invalid Email. The Email already Exist!")
            );
          } else if (codeError === "auth/wrong-password") {
            dispatch(
              authActions.setMessage(
                "Invalid password. The password is not correct!"
              )
            );
          } else if (codeError === "auth/user-not-found") {
            dispatch(authActions.setMessage("The user doesn't exist yet"));
          } else {
            dispatch(authActions.setMessage(codeError));
          }
        });
      dispatch(authActions.setIsLoading(false));
    };
    try {
      await fetchAuth();
    } catch (error) {
      console.log(error.message);
    }
  };
};
