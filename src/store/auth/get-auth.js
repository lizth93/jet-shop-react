import { authActions } from "./auth-slice";
import { nickname } from "./set-nickname";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

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

          const name = dispatch(nickname(email));
          const loginData = [token, email, name];
          dispatch(authActions.setToken(token));
          dispatch(authActions.setAuthenticated(true));
          dispatch(authActions.setEmail(email));
          dispatch(nickname(email));
          localStorage.setItem("token", JSON.stringify(loginData));
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
