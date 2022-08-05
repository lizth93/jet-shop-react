// import { API_URL_STORE } from "config";

import { db } from "firebase.js";
import { addDoc, collection } from "firebase/firestore";
import { cartActions } from "./cart-slice";

export const sendCart = (email, cart) => {
  return (dispatch) => {
    try {
      dispatch(cartActions.setIsLoading(true));
      if (!email || !cart) {
        throw new Error("For pay you need to be logged in");
      }
      const cartCollectionRef = collection(db, email);

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
          })
      );

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
    } catch (error) {
      console.log(error);
    }
  };
};
