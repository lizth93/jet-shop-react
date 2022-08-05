import { auth } from "../../firebase";

import { authActions } from "./auth-slice";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const getAuthGoogle = () => {
  return async (dispatch) => {
    const getAuth = async () => {
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          GoogleAuthProvider.credentialFromResult(result);
          const token = result.user.accessToken;
          const email = result.user.email;

          const loginData = [token, email];
          dispatch(authActions.setToken(token));
          dispatch(authActions.setAuthenticated(true));
          dispatch(authActions.setEmail(email));

          localStorage.setItem("token", JSON.stringify(loginData));
        })
        .catch((error) => {
          const codeError = error.code;
          dispatch(authActions.setMessage(codeError));
        });
    };
    try {
      await getAuth();
    } catch (error) {
      console.log(error.message);
    }
  };
};
