import { authActions } from "./auth-slice";
import { API_KEY } from "config";
import { nickname } from "./set-nickname";

export const getAuth = (email, password, isLogin) => {
  return async (dispatch) => {
    const fetchAuth = async () => {
      dispatch(authActions.setIsLoading(true));
      let url;
      if (isLogin) {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
      } else {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          dispatch(authActions.setIsLoading(false));
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed!";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          const name = dispatch(nickname(data.email));
          const loginData = [data.idToken, data.email, name];
          dispatch(authActions.setToken(data.idToken));
          dispatch(authActions.setAuthenticated(true));
          dispatch(authActions.setEmail(email));
          dispatch(nickname(email));
          localStorage.setItem("token", JSON.stringify(loginData));
        })
        .catch((err) => {
          console.log(err);
        });
    };

    try {
      await fetchAuth();
    } catch (error) {
      console.log(error);
    }
  };
};
