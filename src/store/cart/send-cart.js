import { cartActions } from "./cart-slice";

export const sentCart = (email, cart) => {
  return async (dispatch) => {
    const fetchCart = async () => {
      dispatch(cartActions.setIsLoading(true));

      if (!email) {
        throw new Error("For pay you need to be logged in");
      }
      console.log(email, "what have email");
      const response = await fetch(
        "https://jet-shop-react-default-rtdb.firebaseio.com/.json",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            cart,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong sending the data!");
      }
    };
    try {
      await fetchCart();
    } catch (error) {
      console.log(error);
    }
  };
};
