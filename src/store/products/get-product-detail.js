import { productActions } from "./product-slice";
import { API_URL } from "../../config";

export const getDetail = (id = 1) => {
  return async (dispatch) => {
    dispatch(productActions.setIsLoading(true));

    const getData = async () => {
      const response = await fetch(`${API_URL}/${id}`);

      if (!response.ok) {
        throw new Error("product data failed");
      }

      const data = await response.json();

      console.log(data, "from get product detail");

      dispatch(productActions.setProductDetail(data));
      dispatch(productActions.setIsLoading(false));
    };

    try {
      dispatch(productActions.renderSpinner());
      await getData();

      dispatch(productActions.renderSpinner());
    } catch (error) {
      console.log(error);
    }
  };
};
