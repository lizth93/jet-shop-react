import { API_KEY } from "../../helpers";
import { authActions } from "./auth-slice";

export const changePassword = (token, password) => {
  return async (dispatch) => {
    const changePwd = async () => {
      dispatch(authActions.setIsLoading(true));

      const message =
        "When you change the password you must log in again, are you sure?";
      if (window.confirm(message)) {
        fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              idToken: token,
              password: password,
              returnSecureToken: false,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => {
            dispatch(authActions.setIsLoading(false));
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((data) => {
                let errorMessage = "Change Password failed!";
                if (data && data.error && data.error.message) {
                  errorMessage = data.error.message;
                }

                throw new Error(errorMessage);
              });
            }
          })
          .then(() => {
            dispatch(authActions.setLogout());
          })

          .catch((err) => {
            alert(err.errorMessage);
          });
      }
    };

    try {
      await changePwd();
    } catch (error) {
      console.log(error);
    }
  };
};
