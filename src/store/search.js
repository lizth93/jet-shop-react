//own
import { productActions } from "./product-slice";
import { API_URL } from "./config";

export const getBySearchTerm = (searchTerm) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/search?q=${searchTerm}`);

      if (!response.ok) {
        throw new Error("product data failed");
      }

      const data = await response.json();
      return data;
    };

    try {
      const productsState = await fetchData();

      dispatch(
        productActions.replaceProducts({
          products: productsState.products || [],
        })
      );
      dispatch(productActions.renderSpinner());
    } catch (error) {
      console.log(error);
    }
  };
};
