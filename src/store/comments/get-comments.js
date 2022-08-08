import { API_URL_COMMENTS, RES_PER_PAGE } from "config";
import { productActions } from "store/products/product-slice";

export const getComments = (id, skip = 0) => {
  return async (dispatch) => {
    try {
      dispatch(productActions.setIsLoadingComments(true));
      const fetchResult = await fetchComments(id, skip);

      console.log(fetchResult, "what comments have");
      dispatch(productActions.setProductComments(fetchResult));

      dispatch(productActions.setIsLoadingComments(false));
    } catch (error) {
      dispatch(productActions.setIsLoadingComments(false));
      console.log(error);
    }
  };
};
async function fetchComments(id, skip) {
  const response = await fetch(
    `${API_URL_COMMENTS}/?limit=${RES_PER_PAGE}&skip=${skip}&select=body,${id}`
  );

  if (!response.ok) {
    throw new Error("product data failed");
  }

  return response.json();
}
