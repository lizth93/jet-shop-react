import { productActions } from "./product-slice";
import { API_URL, RES_PER_PAGE } from "../../config";
import { paginationActions } from "../pagination/pagination-slice";

export const getProducts = (category = "all", skip = 0) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const url =
        category.toLowerCase() === "all"
          ? `${API_URL}?limit=${RES_PER_PAGE}&skip=${skip}`
          : `${API_URL}/category/${category.toLowerCase()}?limit=${RES_PER_PAGE}&skip=${skip}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("product data failed");
      }

      const data = await response.json();

      dispatch(paginationActions.setTotalPages(data.total));
      dispatch(paginationActions.calculatePages());
      dispatch(paginationActions.setChanged(true));

      return data;
    };

    try {
      dispatch(productActions.renderSpinner());
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
