export const getAuth = (email, password) => {
  return async (dispatch) => {
    const fetchAuth = async () => {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
          // expiresInMins: 60, // optional
        }),
      });

      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = await response.json();
      console.log(data, "the result authenticated.");
      return data;
    };

    try {
      const authentication = await fetchAuth();

      console.log(authentication, "the result into try catch.");
    } catch (error) {
      console.log(error);
    }
  };
};
