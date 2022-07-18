import { productActions } from "./product-slice";

const apiUrl = "https://dummyjson.com/products";

export const getProducts = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(apiUrl);

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
