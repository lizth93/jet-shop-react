import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../store/product-slice";
import { getProducts } from "../store/get-products";

export default function useInitializeProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(productActions.renderSpinner());
  }, [dispatch]);
}
