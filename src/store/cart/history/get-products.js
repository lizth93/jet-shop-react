import { API_URL_STORE } from "config";
import { historyActions } from "./history-slice";

export const getProductsHistory = (nickname) => {
  return async (dispatch) => {
    const getProducts = async () => {
      const response = await fetch(`${API_URL_STORE}/.json`);

      if (!response.ok) {
        throw new Error("Getting products failed.");
      }

      const data = await response.json();
      return data;
    };

    try {
      dispatch(historyActions.setIsLoading(true));
      const products = await getProducts();

      dispatch(historyActions.replaceItems(products));
      dispatch(historyActions.setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};
