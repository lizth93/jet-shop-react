import { API_URL_STORE } from "config";
import { cartActions } from "./cart-slice";

export const sendCart = (nickname, cart) => {
  return async (dispatch) => {
    const fetchCart = async () => {
      dispatch(cartActions.setIsLoading(true));
      console.log(nickname, cart);

      if (!nickname || !cart) {
        throw new Error("For pay you need to be logged in");
      }

      const response = await fetch(`${API_URL_STORE}/.json`, {
        method: "POST",
        body: JSON.stringify({ nickname, cart }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong sending the data!");
      }

      localStorage.removeItem("cartItems");
      dispatch(cartActions.setIsLoading(false));
      dispatch(cartActions.setChanged());
      dispatch(cartActions.setIsSended(true));
      dispatch(cartActions.setTotalQuantity(0));
      dispatch(
        cartActions.replaceCart({
          items: [],
        })
      );
    };
    try {
      await fetchCart();
    } catch (error) {
      console.log(error);
    }
  };
};
