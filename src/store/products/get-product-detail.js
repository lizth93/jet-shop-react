import { productActions } from "./product-slice";
import { API_URL } from "../../config";

export const getDetail = (id = 1) => {
  return async (dispatch) => {
    try {
      dispatch(productActions.setIsLoading(true));
      const fetchResult = await fetchProductDetail(id);

      dispatch(productActions.setProductDetail(fetchResult));

      dispatch(productActions.setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};
async function fetchProductDetail(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("product data failed");
  }

  return response.json();
}
