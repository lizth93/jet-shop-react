import { db } from "firebase.js";
import { addDoc, collection } from "firebase/firestore";
import { cartActions } from "./cart-slice";

export const sendCart = (email, cart) => {
  return (dispatch) => {
    try {
      if (!email || !cart) {
        throw new Error("For pay you need to be logged in");
      }

      const message =
        "This action will immediately send the order, do you want to continue?";
      if (window.confirm(message)) {
        dispatch(cartActions.setIsLoading(true));
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
    }
  };
};
