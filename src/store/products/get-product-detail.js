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

      dispatch(productActions.setProductDetail(data));
      console.log(data, "this is the data en get product detail");
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
