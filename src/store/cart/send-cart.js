import { MESSAGE_ALERT } from "config";
import { db } from "firebase.js";
import { addDoc, collection } from "firebase/firestore";
import { cartActions } from "./cart-slice";

export const sendCart = (email, cart) => {
  return (dispatch) => {
    try {
      dispatch(cartActions.setHasError(null));
      if (!email || !cart) {
        throw new Error("For pay you need to be logged in");
      }

      const message = MESSAGE_ALERT;
      if (window.confirm(message)) {
        dispatch(cartActions.setIsLoading(true));
        const cartCollectionRef = collection(db, email);
        const currentDate = new Date();
        const currentDateTime = currentDate.toLocaleString();

        cart.map(
          async (item) =>
            await addDoc(cartCollectionRef, {
              description: item.description,
              discount: item.discount,
              id: item.id,
              image: item.image,
              price: item.price,
              quantity: item.quantity,
              title: item.title,
              totalPrice: item.totalPrice,
              date: `${currentDateTime}`,
            })
        );

        localStorage.removeItem("cartItems");
        dispatch(cartActions.setIsLoading(false));
        dispatch(cartActions.setIsSended(true));
        dispatch(cartActions.setTotalQuantity(0));
        dispatch(
          cartActions.replaceCart({
            items: [],
          })
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(cartActions.setHasError(error));
    }
  };
};
