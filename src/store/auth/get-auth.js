export const getAuth = (email, password, isLogin) => {
  return async (dispatch) => {
    const fetchAuth = async () => {
      if (isLogin) {
      } else {
        fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjbq64VDX56Lwm38EBoD62NlihJ40Ry5E",
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          if (res.ok) {
          } else {
            return res.json().then((data) => {
              console.log(data);
            });
          }
        });
      }

      // const response = await fetch("https://dummyjson.com/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     username: "kminchelle",
      //     password: "0lelplR",
      //     // expiresInMins: 60, // optional
      //   }),
      // });

      // if (!response.ok) {
      //   throw new Error("something went wrong");
      // }

      // const data = await response.json();
      // console.log(data, "the result authenticated.");
      // return data;
    };

    try {
      const authentication = await fetchAuth();

      console.log(authentication, "the result into try catch.");
    } catch (error) {
      console.log(error);
    }
  };
};
