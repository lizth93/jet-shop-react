// import { API_URL_STORE } from "config";

import { db } from "firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { historyActions } from "./history-slice";

export const getProductsHistory = (nickname) => {
  return async (dispatch) => {
    const userCollectionProducts = collection(db, nickname);

    const getCart = async () => {
      const data = await getDocs(userCollectionProducts);

      const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(historyActions.replaceItems(result));
    };

    try {
      await getCart();
    } catch (error) {
      console.log(error);
    }

    // const getProducts = async () => {
    //   const response = await fetch(`${API_URL_STORE}/.json`);

    //   if (!response.ok) {
    //     throw new Error("Getting products failed.");
    //   }

    //   const data = await response.json();
    //   return data;
    // };

    // try {
    //   dispatch(historyActions.setIsLoading(true));
    //   const products = await getProducts();

    //   dispatch(historyActions.replaceItems(products));
    //   dispatch(historyActions.setIsLoading(false));
    // } catch (error) {
    //   console.log(error);
    // }
  };
};
