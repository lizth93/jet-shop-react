import { productActions } from "./product-slice";
import { API_URL, RES_PER_PAGE } from "../../helpers";
import { paginationActions } from "../pagination/pagination-slice";

export const getProducts = (category = "all", skip = 0, searchTerm) => {
  return async (dispatch) => {
    try {
      dispatch(productActions.setErrorProducts(null));
      dispatch(productActions.setIsLoading(true));

      const fetchResult = await fetchProducts(category, skip, searchTerm);
      if (category === "search") {
        dispatch(productActions.setSearch(searchTerm));

        if (fetchResult.products.length === 0) {
          dispatch(productActions.setIsLoading(false));
          throw new Error("The product doesn't exist, please try with another");
        }
      }

      if (fetchResult.products.length === 0) {
        throw new Error(
          "Something went wrong, error loading products of category"
        );
      }

      if (fetchResult.products.length !== 0) {
        dispatch(paginationActions.setTotalPages(fetchResult.total));
        dispatch(paginationActions.calculatePages());
        dispatch(
          productActions.replaceProducts({
            products: fetchResult.products || [],
          })
        );

        dispatch(productActions.setIsLoading(false));
      }
    } catch (error) {
      dispatch(productActions.setIsLoading(false));
      dispatch(productActions.setErrorProducts(error.message));
      console.log(error);
    }
  };
};

async function fetchProducts(category, skip, searchTerm) {
  const response = await fetch(getUrl(category, skip, searchTerm));

  if (!response.ok) {
    throw new Error("Error loading products");
  }

  return response.json();
}

function getUrl(category, skip, searchTerm) {
  if (category === "search") {
    return `${API_URL}/search?q=${searchTerm}&limit=${RES_PER_PAGE}&skip=${skip}`;
  } else {
    return category.toLowerCase() === "all"
      ? `${API_URL}?limit=${RES_PER_PAGE}&skip=${skip}`
      : `${API_URL}/category/${category.toLowerCase()}?limit=${RES_PER_PAGE}&skip=${skip}`;
  }
}
