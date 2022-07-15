import { productActions } from "./product-slice";

const apiUrl = "https://dummyjson.com/products";

export const fetchApi = () => {
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
      const productData = await fetchData();

      dispatch(
        productActions.replaceProducts({
          products: productData.products || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
