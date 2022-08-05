import { db } from "firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { historyActions } from "./history-slice";

export const getProductsHistory = (email) => {
  return async (dispatch) => {
    if (!email) return;
    dispatch(historyActions.setIsLoading(true));
    const userCollectionProducts = collection(db, email);

    const getCart = async () => {
      const data = await getDocs(userCollectionProducts);

      const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(historyActions.replaceItems(result));
      dispatch(historyActions.setIsLoading(false));
    };

    try {
      await getCart();
    } catch (error) {
      console.log(error);
    }
  };
};
