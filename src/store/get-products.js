import { productActions } from "./product-slice";
import { API_URL } from "./config";
import { paginationActions } from "./pagination-slice";

export const getProducts = (category = "all") => {
  return async (dispatch) => {
    const fetchData = async () => {
      const url =
        category.toLowerCase() === "all"
          ? `${API_URL}?limit=100&skip=0`
          : `${API_URL}/category/${category}?limit=100&skip=0`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("product data failed");
      }

      const data = await response.json();

      dispatch(paginationActions.setTotalPages(data.total));

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
