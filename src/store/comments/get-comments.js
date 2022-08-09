import { API_URL_COMMENTS } from "config";
import { productActions } from "store/products/product-slice";

export const getComments = (id) => {
  return async (dispatch) => {
    try {
      dispatch(productActions.setErrorComments(null));
      dispatch(productActions.setIsLoadingComments(true));
      const fetchResult = await fetchComments(id);

      dispatch(productActions.setProductComments(fetchResult));

      dispatch(productActions.setIsLoadingComments(false));
    } catch (error) {
      dispatch(productActions.setIsLoadingComments(false));
      dispatch(productActions.setErrorComments(error));
      console.log(error);
    }
  };
};
async function fetchComments(id) {
  console.log(id, "this is the id");
  const response = await fetch(`${API_URL_COMMENTS}/${id}`);

  if (!response.ok) {
    throw new Error("product data failed");
  }

  return response.json();
}
