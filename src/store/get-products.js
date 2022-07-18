import { productActions } from "./product-slice";
import { API_URL } from "./config";

export const getProducts = (category = "all") => {
  return async (dispatch) => {
    const fetchData = async () => {
      let response;

      if (category === "all") {
        response = await fetch(API_URL);
      } else {
        response = await fetch(`${API_URL}/category/${category}`);
      }

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
