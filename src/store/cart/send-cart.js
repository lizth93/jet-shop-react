import { cartActions } from "./cart-slice";

export const sentCart = (email, cart) => {
  return async (dispatch) => {
    const fetchCart = async () => {
      dispatch(cartActions.setIsLoading(true));

      if (!email || !cart) {
        throw new Error("For pay you need to be logged in");
      }

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
