//own

import { productActions } from "./product-slice";
import { paginationActions } from "../pagination/pagination-slice";
import { API_URL, RES_PER_PAGE } from "../../config";

export const getBySearchTerm = (searchTerm, skip = 0) => {
  return async (dispatch) => {
    dispatch(productActions.setSearch(searchTerm));
    dispatch(productActions.setIsLoadingSearch(true));
    const fetchData = async () => {
      const response = await fetch(
        `${API_URL}/search?q=${searchTerm}&limit=${RES_PER_PAGE}&skip=${skip}`
      );

      if (!response.ok) {
        throw new Error("product data failed");
      }

      const data = await response.json();

      dispatch(paginationActions.setTotalPages(data.total));
      dispatch(paginationActions.calculatePages());
      dispatch(paginationActions.setChanged(true));
      dispatch(productActions.setIsLoadingSearch(false));
      return data;
    };

    try {
      const productsState = await fetchData();
      dispatch(productActions.renderSpinner());
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
